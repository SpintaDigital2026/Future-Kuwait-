-- 20260619142120_cce31336-dbf1-49ac-9a3f-be401f569413.sql

-- Roles
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated can read their own role" ON public.user_roles
  FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

-- Updated-at helper
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

-- Profiles
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  avatar_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT TO authenticated USING (id = auth.uid());
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT TO authenticated WITH CHECK (id = auth.uid());
CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER profiles_set_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email));
  RETURN NEW;
END;
$$;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Case Studies
CREATE TYPE public.content_status AS ENUM ('draft', 'published');

CREATE TABLE public.case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  client_name text,
  summary text,
  body_json jsonb,
  body_html text,
  cover_image_path text,
  cover_image_alt text,
  tags text[] NOT NULL DEFAULT '{}',
  industry text,
  results jsonb NOT NULL DEFAULT '[]',
  meta_title text,
  meta_description text,
  status public.content_status NOT NULL DEFAULT 'draft',
  published_at timestamptz,
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.case_studies TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.case_studies TO authenticated;
GRANT ALL ON public.case_studies TO service_role;

ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published case studies" ON public.case_studies
  FOR SELECT TO anon, authenticated USING (status = 'published');
CREATE POLICY "Admins can view all case studies" ON public.case_studies
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can insert case studies" ON public.case_studies
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update case studies" ON public.case_studies
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete case studies" ON public.case_studies
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER case_studies_set_updated_at BEFORE UPDATE ON public.case_studies
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX case_studies_status_published_at_idx ON public.case_studies (status, published_at DESC);
CREATE INDEX case_studies_slug_idx ON public.case_studies (slug);

-- 20260619142144_a91aaef4-7fd5-46c4-843a-cfc2b715a379.sql

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM public, anon;
REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM public, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM public, anon, authenticated;

-- 20260619142211_53918407-2778-4e4f-9367-1088bb4c6d62.sql

CREATE POLICY "Public can read resources" ON storage.objects
  FOR SELECT TO anon, authenticated USING (bucket_id = 'resources');
CREATE POLICY "Admins can upload resources" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'resources' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update resources" ON storage.objects
  FOR UPDATE TO authenticated USING (bucket_id = 'resources' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete resources" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'resources' AND public.has_role(auth.uid(), 'admin'));

-- 20260619152021_264a574e-1929-462c-8aef-e8d512d122e5.sql

CREATE TABLE public.blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  excerpt text,
  body_json jsonb,
  body_html text,
  cover_image_path text,
  cover_image_alt text,
  tags text[] NOT NULL DEFAULT '{}'::text[],
  category text,
  author_name text,
  reading_minutes integer,
  meta_title text,
  meta_description text,
  status public.content_status NOT NULL DEFAULT 'draft',
  published_at timestamptz,
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.blogs TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.blogs TO authenticated;
GRANT ALL ON public.blogs TO service_role;

ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published blogs"
  ON public.blogs FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

CREATE POLICY "Admins can view all blogs"
  ON public.blogs FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert blogs"
  ON public.blogs FOR INSERT
  TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update blogs"
  ON public.blogs FOR UPDATE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'))
  WITH CHECK (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete blogs"
  ON public.blogs FOR DELETE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'));

CREATE TRIGGER blogs_set_updated_at
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX blogs_status_published_at_idx ON public.blogs (status, published_at DESC);
CREATE INDEX blogs_slug_idx ON public.blogs (slug);

-- 20260619180110_a28cfa8e-30d7-40d9-b219-8fdff6299014.sql

CREATE TYPE public.event_type AS ENUM ('event', 'webinar');
CREATE TYPE public.event_status AS ENUM ('draft', 'published');

CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  summary TEXT,
  body_json JSONB,
  body_html TEXT,
  cover_image_path TEXT,
  cover_image_alt TEXT,
  event_type public.event_type NOT NULL DEFAULT 'event',
  start_at TIMESTAMPTZ NOT NULL,
  end_at TIMESTAMPTZ,
  timezone TEXT NOT NULL DEFAULT 'UTC',
  location TEXT,
  is_online BOOLEAN NOT NULL DEFAULT false,
  registration_url TEXT,
  host_name TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  meta_title TEXT,
  meta_description TEXT,
  status public.event_status NOT NULL DEFAULT 'draft',
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.events TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.events TO authenticated;
GRANT ALL ON public.events TO service_role;

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published events"
  ON public.events FOR SELECT
  USING (status = 'published');

CREATE POLICY "Admins can view all events"
  ON public.events FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert events"
  ON public.events FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update events"
  ON public.events FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete events"
  ON public.events FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER set_events_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX events_status_start_at_idx ON public.events (status, start_at DESC);
CREATE INDEX events_slug_idx ON public.events (slug);

-- 20260619180523_d51fa8ae-5368-400b-b7b6-846cab04a68e.sql

-- WHITE PAPERS
CREATE TABLE public.white_papers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  summary TEXT,
  body_json JSONB,
  body_html TEXT,
  cover_image_path TEXT,
  cover_image_alt TEXT,
  pdf_path TEXT,
  pdf_filename TEXT,
  category TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  page_count INTEGER,
  gated BOOLEAN NOT NULL DEFAULT false,
  meta_title TEXT,
  meta_description TEXT,
  status public.event_status NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.white_papers TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.white_papers TO authenticated;
GRANT ALL ON public.white_papers TO service_role;

ALTER TABLE public.white_papers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published white papers"
  ON public.white_papers FOR SELECT
  USING (status = 'published');

CREATE POLICY "Admins can view all white papers"
  ON public.white_papers FOR SELECT
  TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert white papers"
  ON public.white_papers FOR INSERT
  TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update white papers"
  ON public.white_papers FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete white papers"
  ON public.white_papers FOR DELETE
  TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER set_white_papers_updated_at
  BEFORE UPDATE ON public.white_papers
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX white_papers_status_published_idx ON public.white_papers (status, published_at DESC);
CREATE INDEX white_papers_slug_idx ON public.white_papers (slug);

-- GLOSSARY
CREATE TABLE public.glossary_terms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  term TEXT NOT NULL,
  short_definition TEXT NOT NULL,
  body_json JSONB,
  body_html TEXT,
  category TEXT,
  related_terms TEXT[] NOT NULL DEFAULT '{}',
  meta_title TEXT,
  meta_description TEXT,
  status public.event_status NOT NULL DEFAULT 'draft',
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.glossary_terms TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.glossary_terms TO authenticated;
GRANT ALL ON public.glossary_terms TO service_role;

ALTER TABLE public.glossary_terms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published glossary"
  ON public.glossary_terms FOR SELECT
  USING (status = 'published');

CREATE POLICY "Admins can view all glossary"
  ON public.glossary_terms FOR SELECT
  TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert glossary"
  ON public.glossary_terms FOR INSERT
  TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update glossary"
  ON public.glossary_terms FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete glossary"
  ON public.glossary_terms FOR DELETE
  TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER set_glossary_terms_updated_at
  BEFORE UPDATE ON public.glossary_terms
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX glossary_terms_status_term_idx ON public.glossary_terms (status, term);
CREATE INDEX glossary_terms_slug_idx ON public.glossary_terms (slug);

-- 20260619185149_f04018b1-a24f-4ebe-b9cf-1c02013686fa.sql

-- 1. admin_invites table
CREATE TABLE public.admin_invites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  invited_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.admin_invites TO authenticated;
GRANT ALL ON public.admin_invites TO service_role;

ALTER TABLE public.admin_invites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view invites" ON public.admin_invites
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can insert invites" ON public.admin_invites
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete invites" ON public.admin_invites
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- 2. Seed first admin invite
INSERT INTO public.admin_invites (email) VALUES ('manisha@spintadigital.com')
ON CONFLICT (email) DO NOTHING;

-- 3. Update handle_new_user to auto-grant admin role if invited
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email));

  IF EXISTS (SELECT 1 FROM public.admin_invites WHERE lower(email) = lower(NEW.email)) THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin'::public.app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$function$;

-- Ensure trigger exists (in case it wasn't)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 4. If the invited user already exists, grant admin now
INSERT INTO public.user_roles (user_id, role)
SELECT u.id, 'admin'::public.app_role
FROM auth.users u
JOIN public.admin_invites i ON lower(i.email) = lower(u.email)
ON CONFLICT (user_id, role) DO NOTHING;

-- 5. Allow admins to manage user_roles via UI
CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can grant roles" ON public.user_roles
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can revoke roles" ON public.user_roles
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- 20260619185213_c1e92c41-8c61-4693-98c8-91dd44b9d802.sql

REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- 20260924123000_contact_enquiries.sql
CREATE TABLE public.contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind text NOT NULL CHECK (kind IN ('message', 'booking')),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  topic text,
  message text NOT NULL,
  preferred_date date,
  preferred_time text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX contact_enquiries_booking_slot
  ON public.contact_enquiries (preferred_date, preferred_time)
  WHERE kind = 'booking';

ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact enquiries"
  ON public.contact_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can read contact enquiries"
  ON public.contact_enquiries
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.list_booked_contact_slots()
RETURNS TABLE (preferred_date date, preferred_time text)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT contact_enquiries.preferred_date, contact_enquiries.preferred_time
  FROM public.contact_enquiries
  WHERE contact_enquiries.kind = 'booking';
$$;

REVOKE ALL ON FUNCTION public.list_booked_contact_slots() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.list_booked_contact_slots() TO anon, authenticated;

