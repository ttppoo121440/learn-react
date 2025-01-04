/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PATH: string;
  // 其他環境變數...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
