export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)";
  };
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
      education_provider_certifications: {
        Row: {
          dvpp_msmt: boolean;
          education_provider_id: number;
          mpsv: boolean;
          mzcr: boolean;
          zza_msmt: boolean;
        };
        Insert: {
          dvpp_msmt?: boolean;
          education_provider_id: number;
          mpsv?: boolean;
          mzcr?: boolean;
          zza_msmt?: boolean;
        };
        Update: {
          dvpp_msmt?: boolean;
          education_provider_id?: number;
          mpsv?: boolean;
          mzcr?: boolean;
          zza_msmt?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "education_provider_certifications_education_provider_id_fkey";
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
          children: boolean;
          education_provider_id: number;
          elderly: boolean;
          outdoor: boolean;
          paramedics: boolean;
          waterside: boolean;
        };
        Insert: {
          children?: boolean;
          education_provider_id: number;
          elderly?: boolean;
          outdoor?: boolean;
          paramedics?: boolean;
          waterside?: boolean;
        };
        Update: {
          children?: boolean;
          education_provider_id?: number;
          elderly?: boolean;
          outdoor?: boolean;
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
      education_provider_methods: {
        Row: {
          education_provider_id: number;
          masking: boolean;
          vr: boolean;
        };
        Insert: {
          education_provider_id: number;
          masking?: boolean;
          vr?: boolean;
        };
        Update: {
          education_provider_id?: number;
          masking?: boolean;
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
      education_provider_plurality: {
        Row: {
          education_provider_id: number;
          groups: boolean;
          individuals: boolean;
        };
        Insert: {
          education_provider_id: number;
          groups?: boolean;
          individuals?: boolean;
        };
        Update: {
          education_provider_id?: number;
          groups?: boolean;
          individuals?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "education_provider_plurality_education_provider_id_fkey";
            columns: ["education_provider_id"];
            isOneToOne: true;
            referencedRelation: "education_providers";
            referencedColumns: ["id"];
          },
        ];
      };
      education_provider_privacy: {
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
          lectors: boolean;
          other: string;
          professionals: boolean;
          schools: boolean;
        };
        Insert: {
          adults?: boolean;
          children?: boolean;
          education_provider_id: number;
          lectors?: boolean;
          other?: string;
          professionals?: boolean;
          schools?: boolean;
        };
        Update: {
          adults?: boolean;
          children?: boolean;
          education_provider_id?: number;
          lectors?: boolean;
          other?: string;
          professionals?: boolean;
          schools?: boolean;
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
      education_provider_types: {
        Row: {
          application: boolean;
          course_live: boolean;
          course_online: boolean;
          education_provider_id: number;
          event: boolean;
          literature: boolean;
          other: string;
          podcast: boolean;
        };
        Insert: {
          application?: boolean;
          course_live?: boolean;
          course_online?: boolean;
          education_provider_id: number;
          event?: boolean;
          literature?: boolean;
          other?: string;
          podcast?: boolean;
        };
        Update: {
          application?: boolean;
          course_live?: boolean;
          course_online?: boolean;
          education_provider_id?: number;
          event?: boolean;
          literature?: boolean;
          other?: string;
          podcast?: boolean;
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
          image: string | null;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          id?: number;
          name?: string;
          subname?: string | null;
          image?: string | null;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          id?: number;
          name?: string;
          subname?: string | null;
          image?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      create_full_education_provider: {
        Args: {
          base: Database["public"]["Tables"]["education_providers"]["Insert"];
          contact: Omit<
            Database["public"]["Tables"]["education_provider_contact"]["Insert"],
            "education_provider_id"
          >;
          focus: Omit<
            Database["public"]["Tables"]["education_provider_focus"]["Insert"],
            "education_provider_id"
          >;
          locations: Omit<
            Database["public"]["Tables"]["education_provider_locations"]["Insert"],
            "education_provider_id"
          >;
          privacy: Omit<
            Database["public"]["Tables"]["education_provider_privacy"]["Insert"],
            "education_provider_id"
          >;
          targets: Omit<
            Database["public"]["Tables"]["education_provider_targets"]["Insert"],
            "education_provider_id"
          >;
          methods: Omit<
            Database["public"]["Tables"]["education_provider_methods"]["Insert"],
            "education_provider_id"
          >;
          types: Omit<
            Database["public"]["Tables"]["education_provider_types"]["Insert"],
            "education_provider_id"
          >;
          plurality: Omit<
            Database["public"]["Tables"]["education_provider_plurality"]["Insert"],
            "education_provider_id"
          >;
          certifications: Omit<
            Database["public"]["Tables"]["education_provider_certifications"]["Insert"],
            "education_provider_id"
          >;
        };
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
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
