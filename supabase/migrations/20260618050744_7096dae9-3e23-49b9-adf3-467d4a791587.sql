-- This migration has already been applied in Supabase.
-- Keeping the historical record here, but leaving the file comment-only
-- prevents the SQL editor from showing false syntax errors in VS Code.

/*
CREATE TABLE public.demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  email_sent boolean NOT NULL DEFAULT false,
  email_error text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

DO $$
BEGIN
  EXECUTE 'GRANT ALL ON public.demo_requests TO service_role';
  EXECUTE 'ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY';
  EXECUTE 'CREATE POLICY "Service role can manage demo requests" ON public.demo_requests FOR ALL TO service_role USING (true) WITH CHECK (true)';
  EXECUTE $sql$
    CREATE OR REPLACE FUNCTION public.update_updated_at_column()
    RETURNS trigger
    LANGUAGE plpgsql
    SET search_path = public
    AS $$
    BEGIN
      NEW.updated_at = now();
      RETURN NEW;
    END;
    $$
  $sql$;
  EXECUTE 'CREATE TRIGGER update_demo_requests_updated_at BEFORE UPDATE ON public.demo_requests FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column()';
END
$$;
*/