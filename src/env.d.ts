interface ImportMetaEnv {
  /** Public form access key. Falls back to SITE.formgong.accessKey in src/config.ts. */
  readonly PUBLIC_FORMGONG_ACCESS_KEY?: string;
  /** Optional form POST endpoint URL. Falls back to SITE.formgong.endpoint in src/config.ts. */
  readonly PUBLIC_FORMGONG_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
