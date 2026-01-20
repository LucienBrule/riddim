import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { mkdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const reviewDir = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(reviewDir, '..');
const configPath = path.join(reviewDir, 'docs-ui-sweep.json');
const config = JSON.parse(readFileSync(configPath, 'utf8'));

if (!Array.isArray(config.pages) || config.pages.length === 0) {
  throw new Error('docs-ui-sweep.json must define at least one page.');
}
if (!Array.isArray(config.viewports) || config.viewports.length === 0) {
  throw new Error('docs-ui-sweep.json must define at least one viewport.');
}

const baseUrl = config.baseUrl?.trim()
  ? config.baseUrl.trim().replace(/\/$/, '')
  : pathToFileURL(path.join(docsRoot, 'site', 'dist', 'antora')).href.replace(/\/$/, '');

const dateStamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
const outputDir = path.join(docsRoot, 'screenshots', 'docs-ui', dateStamp);
mkdirSync(outputDir, { recursive: true });

const pages = config.pages.map(page => {
  const parts = page.slug.split('-');
  const area = parts[0] ?? 'doc';
  const pageSlug = parts.slice(1).join('-') || page.slug;
  return {
    ...page,
    fileSlug: `${area}-${pageSlug}`
  };
});

const defaultArgs = [
  '-y',
  'chrome-devtools-mcp@latest',
  '--headless=true',
  '--executable-path=/usr/bin/google-chrome',
  '--isolated=true',
  '--chrome-arg=--no-sandbox',
  '--chrome-arg=--disable-gpu'
];

const transport = new StdioClientTransport({
  command: config.mcp?.command ?? 'npx',
  args: config.mcp?.args ?? defaultArgs,
  stderr: 'inherit',
  cwd: docsRoot
});

const client = new Client({
  name: 'docs-ui-capture',
  version: '0.1.0'
});

try {
  await client.connect(transport);
  await client.callTool({ name: 'new_page', arguments: { url: 'about:blank' } });

  for (const viewport of config.viewports) {
    await client.callTool({
      name: 'resize_page',
      arguments: { width: viewport.width, height: viewport.height }
    });

    for (const page of pages) {
      const url = `${baseUrl}/${page.path}`;
      await client.callTool({
        name: 'navigate_page',
        arguments: { type: 'url', url }
      });

      const fileName = `${page.fileSlug}--${viewport.name}.png`;
      const filePath = path.join(outputDir, fileName);

      await client.callTool({
        name: 'take_screenshot',
        arguments: { fullPage: viewport.fullPage ?? true, filePath }
      });

      console.log(`Saved ${filePath}`);
    }
  }
} finally {
  await client.close();
}
