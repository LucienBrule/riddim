export type AppConfig = {
  apiBase: string
  rpcPath: string
}

const defaultConfig: AppConfig = {
  apiBase: 'http://localhost:8080',
  rpcPath: '/sound/play'
}

export async function loadConfig(base: string): Promise<AppConfig> {
  const configUrl = `${base}config.json`
  try {
    const res = await fetch(configUrl, { cache: 'no-store' })
    if (!res.ok) throw new Error(`Config fetch failed ${res.status}`)
    const data = (await res.json()) as AppConfig
    return { ...defaultConfig, ...data }
  } catch (e) {
    console.warn('Using default config because fetch failed', e)
    return defaultConfig
  }
}
