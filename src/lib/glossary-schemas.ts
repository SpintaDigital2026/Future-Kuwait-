import { z } from "zod";

export const glossaryInputSchema = z.object({
  id: z.string().uuid().optional(),
  slug: z.string().min(1).max(160).regex(/^[a-z0-9-]+$/, "Lowercase letters, numbers, hyphens only"),
  term: z.string().min(1).max(200),
  short_definition: z.string().min(1).max(500),
  body_json: z.any().nullable().optional(),
  body_html: z.string().nullable().optional(),
  category: z.string().max(80).nullable().optional(),
  related_terms: z.array(z.string().max(80)).max(30).default([]),
  meta_title: z.string().max(160).nullable().optional(),
  meta_description: z.string().max(300).nullable().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
});

export type GlossaryInput = z.infer<typeof glossaryInputSchema>;

export interface GlossaryRow {
  id: string;
  slug: string;
  term: string;
  short_definition: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body_json: any;
  body_html: string | null;
  category: string | null;
  related_terms: string[];
  meta_title: string | null;
  meta_description: string | null;
  status: "draft" | "published";
  author_id: string | null;
  created_at: string;
  updated_at: string;
}
