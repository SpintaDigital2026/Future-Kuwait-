import { z } from "zod";

export const resultItemSchema = z.object({
  label: z.string().min(1).max(120),
  value: z.string().min(1).max(120),
});

export const caseStudyInputSchema = z.object({
  id: z.string().uuid().optional(),
  slug: z.string().min(1).max(120).regex(/^[a-z0-9-]+$/, "Lowercase letters, numbers, hyphens only"),
  title: z.string().min(1).max(200),
  client_name: z.string().max(200).nullable().optional(),
  summary: z.string().max(500).nullable().optional(),
  body_json: z.any().nullable().optional(),
  body_html: z.string().nullable().optional(),
  cover_image_path: z.string().nullable().optional(),
  cover_image_alt: z.string().max(200).nullable().optional(),
  tags: z.array(z.string().max(40)).max(20).default([]),
  industry: z.string().max(80).nullable().optional(),
  results: z.array(resultItemSchema).max(12).default([]),
  meta_title: z.string().max(160).nullable().optional(),
  meta_description: z.string().max(300).nullable().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
});

export type CaseStudyInput = z.infer<typeof caseStudyInputSchema>;
export type ResultItem = z.infer<typeof resultItemSchema>;

export interface CaseStudyRow {
  id: string;
  slug: string;
  title: string;
  client_name: string | null;
  summary: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body_json: any;
  body_html: string | null;
  cover_image_path: string | null;
  cover_image_alt: string | null;
  tags: string[];
  industry: string | null;
  results: ResultItem[];
  meta_title: string | null;
  meta_description: string | null;
  status: "draft" | "published";
  published_at: string | null;
  author_id: string | null;
  created_at: string;
  updated_at: string;
}
