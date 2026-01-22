import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { App } from './App'

const mockConfig = {
  apiBase: 'https://api.example.test',
  rpcPath: '/sound/play'
}

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async () => ({
    ok: true,
    json: async () => mockConfig
  })))
})

afterEach(() => {
  vi.unstubAllGlobals()
})

test('renders the under construction banner and CTAs', () => {
  render(<App />)

  expect(screen.getByText(/under construction/i)).toBeInTheDocument()

  const docsLink = screen.getByRole('link', { name: /read the docs/i })
  expect(docsLink).toHaveAttribute('href', '/riddim/docs/')
})

test('renders the mockup panels', () => {
  render(<App />)

  expect(screen.getByText(/session timeline/i)).toBeInTheDocument()
  expect(screen.getByText(/riddim live console/i)).toBeInTheDocument()
})

test('loads runtime config values', async () => {
  render(<App />)

  expect(await screen.findByText(`apiBase: ${mockConfig.apiBase}`)).toBeInTheDocument()
  expect(await screen.findByText(`rpcPath: ${mockConfig.rpcPath}`)).toBeInTheDocument()
})
