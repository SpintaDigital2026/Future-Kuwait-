import { z } from "zod";

export const blogInputSchema = z.object({
  id: z.string().uuid().optional(),
  slug: z.string().min(1).max(160).regex(/^[a-z0-9-]+$/, "Lowercase letters, numbers, hyphens only"),
  title: z.string().min(1).max(200),
  excerpt: z.string().max(500).nullable().optional(),
  body_json: z.any().nullable().optional(),
  body_html: z.string().nullable().optional(),
  cover_image_path: z.string().nullable().optional(),
  cover_image_alt: z.string().max(200).nullable().optional(),
  tags: z.array(z.string().max(40)).max(20).default([]),
  category: z.string().max(80).nullable().optional(),
  author_name: z.string().max(120).nullable().optional(),
  reading_minutes: z.number().int().min(1).max(120).nullable().optional(),
  meta_title: z.string().max(160).nullable().optional(),
  meta_description: z.string().max(300).nullable().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
});

export type BlogInput = z.infer<typeof blogInputSchema>;

export interface BlogRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body_json: any;
  body_html: string | null;
  cover_image_path: string | null;
  cover_image_alt: string | null;
  tags: string[];
  category: string | null;
  author_name: string | null;
  reading_minutes: number | null;
  meta_title: string | null;
  meta_description: string | null;
  status: "draft" | "published";
  published_at: string | null;
  author_id: string | null;
  created_at: string;
  updated_at: string;
}
