interface ProcessEnv {
  readonly NODE_ENV?: string;
  readonly SUPABASE_URL?: string;
  readonly SUPABASE_PUBLISHABLE_KEY?: string;
  readonly SUPABASE_SERVICE_ROLE_KEY?: string;
  readonly LOVABLE_API_KEY?: string;
  readonly RESEND_API_KEY?: string;
  readonly DATABASE_URL?: string;
  readonly STRIPE_SECRET_KEY?: string;
  readonly [key: string]: string | undefined;
}

declare const process: {
  env: ProcessEnv;
};

declare module "node:process" {
  const process: {
    env: ProcessEnv;
  };

  export default process;
}