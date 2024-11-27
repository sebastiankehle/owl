declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SENDGRID_API_KEY: string;
      EMAIL_TO: string;
      EMAIL_FROM: string;
    }
  }
}

export {};
