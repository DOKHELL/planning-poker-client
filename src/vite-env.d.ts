/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_GATEWAY: string
  readonly VITE_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
