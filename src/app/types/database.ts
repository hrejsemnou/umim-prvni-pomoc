export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      education_provider_accessibility: {
        Row: {
          education_provider_id: number;
          hearing_impaired: boolean;
          no_barriers: boolean;
          sight_impaired: boolean;
        };
        Insert: {
          education_provider_id: number;
          hearing_impaired?: boolean;
          no_barriers?: boolean;
          sight_impaired?: boolean;
        };
        Update: {
          education_provider_id?: number;
          hearing_impaired?: boolean;
          no_barriers?: boolean;
          sight_impaired?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "education_provider_accessibility_education_provider_id_fkey";
            columns: ["education_provider_id"];
            isOneToOne: true;
            referencedRelation: "education_providers";
            referencedColumns: ["id"];
          },
        ];
      };
      education_provider_contact: {
        Row: {
          education_provider_id: number;
          email: string;
          facebook: string | null;
          instagram: string | null;
          phone: string | null;
          website: string | null;
        };
        Insert: {
          education_provider_id: number;
          email: string;
          facebook?: string | null;
          instagram?: string | null;
          phone?: string | null;
          website?: string | null;
        };
        Update: {
          education_provider_id?: number;
          email?: string;
          facebook?: string | null;
          instagram?: string | null;
          phone?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "education_provider_contact_education_provider_id_fkey";
            columns: ["education_provider_id"];
            isOneToOne: true;
            referencedRelation: "education_providers";
            referencedColumns: ["id"];
          },
        ];
      };
      education_provider_focus: {
        Row: {
          education_provider_id: number;
          infants: boolean;
          mountains: boolean;
          paramedics: boolean;
          waterside: boolean;
        };
        Insert: {
          education_provider_id: number;
          infants?: boolean;
          mountains?: boolean;
          paramedics?: boolean;
          waterside?: boolean;
        };
        Update: {
          education_provider_id?: number;
          infants?: boolean;
          mountains?: boolean;
          paramedics?: boolean;
          waterside?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "education_provider_focus_education_provider_id_fkey";
            columns: ["education_provider_id"];
            isOneToOne: true;
            referencedRelation: "education_providers";
            referencedColumns: ["id"];
          },
        ];
      };
      education_provider_form: {
        Row: {
          education_provider_id: number;
          live: boolean;
          online: boolean;
        };
        Insert: {
          education_provider_id: number;
          live?: boolean;
          online?: boolean;
        };
        Update: {
          education_provider_id?: number;
          live?: boolean;
          online?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "education_provider_form_education_provider_id_fkey";
            columns: ["education_provider_id"];
            isOneToOne: true;
            referencedRelation: "education_providers";
            referencedColumns: ["id"];
          },
        ];
      };
      education_provider_locations: {
        Row: {
          education_provider_id: number;
          everywhere: boolean;
          region: string | null;
        };
        Insert: {
          education_provider_id: number;
          everywhere?: boolean;
          region?: string | null;
        };
        Update: {
          education_provider_id?: number;
          everywhere?: boolean;
          region?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "education_provider_locations_education_provider_id_fkey";
            columns: ["education_provider_id"];
            isOneToOne: true;
            referencedRelation: "education_providers";
            referencedColumns: ["id"];
          },
        ];
      };
      education_provider_publicity: {
        Row: {
          education_provider_id: number;
          private: boolean;
          public: boolean;
        };
        Insert: {
          education_provider_id: number;
          private?: boolean;
          public?: boolean;
        };
        Update: {
          education_provider_id?: number;
          private?: boolean;
          public?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "education_provider_publicity_education_provider_id_fkey";
            columns: ["education_provider_id"];
            isOneToOne: true;
            referencedRelation: "education_providers";
            referencedColumns: ["id"];
          },
        ];
      };
      education_provider_targets: {
        Row: {
          adults: boolean;
          children: boolean;
          education_provider_id: number;
          elderly: boolean;
          lectors: boolean;
          professionals: boolean;
          teams_companies: boolean;
          teams_driving_schools: boolean;
          teams_schools: boolean;
        };
        Insert: {
          adults?: boolean;
          children?: boolean;
          education_provider_id: number;
          elderly?: boolean;
          lectors?: boolean;
          professionals?: boolean;
          teams_companies?: boolean;
          teams_driving_schools?: boolean;
          teams_schools?: boolean;
        };
        Update: {
          adults?: boolean;
          children?: boolean;
          education_provider_id?: number;
          elderly?: boolean;
          lectors?: boolean;
          professionals?: boolean;
          teams_companies?: boolean;
          teams_driving_schools?: boolean;
          teams_schools?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "education_provider_targets_education_provider_id_fkey";
            columns: ["education_provider_id"];
            isOneToOne: true;
            referencedRelation: "education_providers";
            referencedColumns: ["id"];
          },
        ];
      };
      education_provider_terrains: {
        Row: {
          education_provider_id: number;
          masking: boolean;
          theory: boolean;
          vr: boolean;
        };
        Insert: {
          education_provider_id: number;
          masking?: boolean;
          theory?: boolean;
          vr?: boolean;
        };
        Update: {
          education_provider_id?: number;
          masking?: boolean;
          theory?: boolean;
          vr?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "education_provider_terrains_education_provider_id_fkey";
            columns: ["education_provider_id"];
            isOneToOne: true;
            referencedRelation: "education_providers";
            referencedColumns: ["id"];
          },
        ];
      };
      education_provider_types: {
        Row: {
          book: boolean;
          course: boolean;
          education_provider_id: number;
          event: boolean;
          game: boolean;
          podcast: boolean;
          website: boolean;
        };
        Insert: {
          book?: boolean;
          course?: boolean;
          education_provider_id: number;
          event?: boolean;
          game?: boolean;
          podcast?: boolean;
          website?: boolean;
        };
        Update: {
          book?: boolean;
          course?: boolean;
          education_provider_id?: number;
          event?: boolean;
          game?: boolean;
          podcast?: boolean;
          website?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "education_provider_types_education_provider_id_fkey";
            columns: ["education_provider_id"];
            isOneToOne: true;
            referencedRelation: "education_providers";
            referencedColumns: ["id"];
          },
        ];
      };
      education_providers: {
        Row: {
          active: boolean;
          created_at: string;
          id: number;
          name: string;
          subname: string | null;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          id?: number;
          name?: string;
          subname?: string | null;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          id?: number;
          name?: string;
          subname?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const;
