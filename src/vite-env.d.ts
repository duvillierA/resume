/// <reference types="vite/client" />

declare module "*.md" {
  const content: string;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_PROFILE_EMAIL : string
  readonly VITE_PROFILE_TELEPHONE : string
  readonly VITE_VERCEL_URL : string
}

interface ImportMeta {
  readonly env : ImportMetaEnv
}