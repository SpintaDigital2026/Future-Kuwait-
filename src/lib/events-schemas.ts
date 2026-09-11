import { z } from "zod";

export const eventInputSchema = z.object({
  id: z.string().uuid().optional(),
  slug: z.string().min(1).max(160).regex(/^[a-z0-9-]+$/, "Lowercase letters, numbers, hyphens only"),
  title: z.string().min(1).max(200),
  summary: z.string().max(500).nullable().optional(),
  body_json: z.any().nullable().optional(),
  body_html: z.string().nullable().optional(),
  cover_image_path: z.string().nullable().optional(),
  cover_image_alt: z.string().max(200).nullable().optional(),
  event_type: z.enum(["event", "webinar"]).default("event"),
  start_at: z.string().min(1, "Start date/time is required"),
  end_at: z.string().nullable().optional(),
  timezone: z.string().min(1).default("UTC"),
  location: z.string().max(200).nullable().optional(),
  is_online: z.boolean().default(false),
  registration_url: z.string().url().or(z.literal("")).nullable().optional(),
  host_name: z.string().max(120).nullable().optional(),
  tags: z.array(z.string().max(40)).max(20).default([]),
  meta_title: z.string().max(160).nullable().optional(),
  meta_description: z.string().max(300).nullable().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
});

export type EventInput = z.infer<typeof eventInputSchema>;

export interface EventRow {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body_json: any;
  body_html: string | null;
  cover_image_path: string | null;
  cover_image_alt: string | null;
  event_type: "event" | "webinar";
  start_at: string;
  end_at: string | null;
  timezone: string;
  location: string | null;
  is_online: boolean;
  registration_url: string | null;
  host_name: string | null;
  tags: string[];
  meta_title: string | null;
  meta_description: string | null;
  status: "draft" | "published";
  author_id: string | null;
  created_at: string;
  updated_at: string;
}
