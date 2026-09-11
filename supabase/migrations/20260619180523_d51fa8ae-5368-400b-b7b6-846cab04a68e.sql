
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
