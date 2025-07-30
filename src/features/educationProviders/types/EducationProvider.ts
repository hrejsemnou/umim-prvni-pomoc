import { Database } from "@/lib/types/database";

export type EducationProviderSelectType =
  Database["public"]["Tables"]["education_providers"]["Row"] & {
    education_provider_contact:
      | Database["public"]["Tables"]["education_provider_contact"]["Row"]
      | null;
  } & {
    education_provider_focus:
      | Database["public"]["Tables"]["education_provider_focus"]["Row"]
      | null;
  } & {
    education_provider_plurality:
      | Database["public"]["Tables"]["education_provider_plurality"]["Row"]
      | null;
  } & {
    education_provider_certifications:
      | Database["public"]["Tables"]["education_provider_certifications"]["Row"]
      | null;
  } & {
    education_provider_locations:
      | Database["public"]["Tables"]["education_provider_locations"]["Row"]
      | null;
  } & {
    education_provider_privacy:
      | Database["public"]["Tables"]["education_provider_privacy"]["Row"]
      | null;
  } & {
    education_provider_targets:
      | Database["public"]["Tables"]["education_provider_targets"]["Row"]
      | null;
  } & {
    education_provider_methods:
      | Database["public"]["Tables"]["education_provider_methods"]["Row"]
      | null;
  } & {
    education_provider_types:
      | Database["public"]["Tables"]["education_provider_types"]["Row"]
      | null;
  };

export type EducationProviderInsertType = {
  base: Database["public"]["Tables"]["education_providers"]["Insert"];
  contact: Omit<
    Database["public"]["Tables"]["education_provider_contact"]["Insert"],
    "education_provider_id"
  >;
  focus: Omit<
    Database["public"]["Tables"]["education_provider_focus"]["Insert"],
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
  methods: Omit<
    Database["public"]["Tables"]["education_provider_methods"]["Insert"],
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
  types: Omit<
    Database["public"]["Tables"]["education_provider_types"]["Insert"],
    "education_provider_id"
  >;
};
