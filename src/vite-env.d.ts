/// <reference types="vite/client" />
export {};

declare global {
  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_CURRENT_MONTH: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
