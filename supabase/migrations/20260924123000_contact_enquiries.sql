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
