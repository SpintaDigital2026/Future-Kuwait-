export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      admin_invites: {
        Row: {
          created_at: string
          email: string
          id: string
          invited_by: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          invited_by?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          invited_by?: string | null
        }
        Relationships: []
      }
      blogs: {
        Row: {
          author_id: string | null
          author_name: string | null
          body_html: string | null
          body_json: Json | null
          category: string | null
          cover_image_alt: string | null
          cover_image_path: string | null
          created_at: string
          excerpt: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          reading_minutes: number | null
          slug: string
          status: Database["public"]["Enums"]["content_status"]
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          author_name?: string | null
          body_html?: string | null
          body_json?: Json | null
          category?: string | null
          cover_image_alt?: string | null
          cover_image_path?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          reading_minutes?: number | null
          slug: string
          status?: Database["public"]["Enums"]["content_status"]
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          author_name?: string | null
          body_html?: string | null
          body_json?: Json | null
          category?: string | null
          cover_image_alt?: string | null
          cover_image_path?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          reading_minutes?: number | null
          slug?: string
          status?: Database["public"]["Enums"]["content_status"]
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      case_studies: {
        Row: {
          author_id: string | null
          body_html: string | null
          body_json: Json | null
          client_name: string | null
          cover_image_alt: string | null
          cover_image_path: string | null
          created_at: string
          id: string
          industry: string | null
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          results: Json
          slug: string
          status: Database["public"]["Enums"]["content_status"]
          summary: string | null
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          body_html?: string | null
          body_json?: Json | null
          client_name?: string | null
          cover_image_alt?: string | null
          cover_image_path?: string | null
          created_at?: string
          id?: string
          industry?: string | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          results?: Json
          slug: string
          status?: Database["public"]["Enums"]["content_status"]
          summary?: string | null
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          body_html?: string | null
          body_json?: Json | null
          client_name?: string | null
          cover_image_alt?: string | null
          cover_image_path?: string | null
          created_at?: string
          id?: string
          industry?: string | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          results?: Json
          slug?: string
          status?: Database["public"]["Enums"]["content_status"]
          summary?: string | null
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          author_id: string | null
          body_html: string | null
          body_json: Json | null
          cover_image_alt: string | null
          cover_image_path: string | null
          created_at: string
          end_at: string | null
          event_type: Database["public"]["Enums"]["event_type"]
          host_name: string | null
          id: string
          is_online: boolean
          location: string | null
          meta_description: string | null
          meta_title: string | null
          registration_url: string | null
          slug: string
          start_at: string
          status: Database["public"]["Enums"]["event_status"]
          summary: string | null
          tags: string[]
          timezone: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          body_html?: string | null
          body_json?: Json | null
          cover_image_alt?: string | null
          cover_image_path?: string | null
          created_at?: string
          end_at?: string | null
          event_type?: Database["public"]["Enums"]["event_type"]
          host_name?: string | null
          id?: string
          is_online?: boolean
          location?: string | null
          meta_description?: string | null
          meta_title?: string | null
          registration_url?: string | null
          slug: string
          start_at: string
          status?: Database["public"]["Enums"]["event_status"]
          summary?: string | null
          tags?: string[]
          timezone?: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          body_html?: string | null
          body_json?: Json | null
          cover_image_alt?: string | null
          cover_image_path?: string | null
          created_at?: string
          end_at?: string | null
          event_type?: Database["public"]["Enums"]["event_type"]
          host_name?: string | null
          id?: string
          is_online?: boolean
          location?: string | null
          meta_description?: string | null
          meta_title?: string | null
          registration_url?: string | null
          slug?: string
          start_at?: string
          status?: Database["public"]["Enums"]["event_status"]
          summary?: string | null
          tags?: string[]
          timezone?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      glossary_terms: {
        Row: {
          author_id: string | null
          body_html: string | null
          body_json: Json | null
          category: string | null
          created_at: string
          id: string
          meta_description: string | null
          meta_title: string | null
          related_terms: string[]
          short_definition: string
          slug: string
          status: Database["public"]["Enums"]["event_status"]
          term: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          body_html?: string | null
          body_json?: Json | null
          category?: string | null
          created_at?: string
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          related_terms?: string[]
          short_definition: string
          slug: string
          status?: Database["public"]["Enums"]["event_status"]
          term: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          body_html?: string | null
          body_json?: Json | null
          category?: string | null
          created_at?: string
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          related_terms?: string[]
          short_definition?: string
          slug?: string
          status?: Database["public"]["Enums"]["event_status"]
          term?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      white_papers: {
        Row: {
          author_id: string | null
          body_html: string | null
          body_json: Json | null
          category: string | null
          cover_image_alt: string | null
          cover_image_path: string | null
          created_at: string
          gated: boolean
          id: string
          meta_description: string | null
          meta_title: string | null
          page_count: number | null
          pdf_filename: string | null
          pdf_path: string | null
          published_at: string | null
          slug: string
          status: Database["public"]["Enums"]["event_status"]
          summary: string | null
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          body_html?: string | null
          body_json?: Json | null
          category?: string | null
          cover_image_alt?: string | null
          cover_image_path?: string | null
          created_at?: string
          gated?: boolean
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          page_count?: number | null
          pdf_filename?: string | null
          pdf_path?: string | null
          published_at?: string | null
          slug: string
          status?: Database["public"]["Enums"]["event_status"]
          summary?: string | null
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          body_html?: string | null
          body_json?: Json | null
          category?: string | null
          cover_image_alt?: string | null
          cover_image_path?: string | null
          created_at?: string
          gated?: boolean
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          page_count?: number | null
          pdf_filename?: string | null
          pdf_path?: string | null
          published_at?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["event_status"]
          summary?: string | null
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin"
      content_status: "draft" | "published"
      event_status: "draft" | "published"
      event_type: "event" | "webinar"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin"],
      content_status: ["draft", "published"],
      event_status: ["draft", "published"],
      event_type: ["event", "webinar"],
    },
  },
} as const
