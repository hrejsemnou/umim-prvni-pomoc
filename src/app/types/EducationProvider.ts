import { Database } from "@/app/types/database";

export type EducationProviderSelectType =
  Database["public"]["Tables"]["education_providers"]["Row"] & {
    education_provider_accessibility:
      | Database["public"]["Tables"]["education_provider_accessibility"]["Row"]
      | null;
  } & {
    education_provider_contact:
      | Database["public"]["Tables"]["education_provider_contact"]["Row"]
      | null;
  } & {
    education_provider_focus:
      | Database["public"]["Tables"]["education_provider_focus"]["Row"]
      | null;
  } & {
    education_provider_form:
      | Database["public"]["Tables"]["education_provider_form"]["Row"]
      | null;
  } & {
    education_provider_locations:
      | Database["public"]["Tables"]["education_provider_locations"]["Row"]
      | null;
  } & {
    education_provider_publicity:
      | Database["public"]["Tables"]["education_provider_publicity"]["Row"]
      | null;
  } & {
    education_provider_targets:
      | Database["public"]["Tables"]["education_provider_targets"]["Row"]
      | null;
  } & {
    education_provider_terrains:
      | Database["public"]["Tables"]["education_provider_terrains"]["Row"]
      | null;
  } & {
    education_provider_types:
      | Database["public"]["Tables"]["education_provider_types"]["Row"]
      | null;
  };

export type EducationProviderInsertType = {
  base: Database["public"]["Tables"]["education_providers"]["Insert"];
  accessibility: Database["public"]["Tables"]["education_provider_accessibility"]["Insert"];
  contact: Database["public"]["Tables"]["education_provider_contact"]["Insert"];
  focus: Database["public"]["Tables"]["education_provider_focus"]["Insert"];
  form: Database["public"]["Tables"]["education_provider_form"]["Insert"];
  locations: Database["public"]["Tables"]["education_provider_locations"]["Insert"];
  publicity: Database["public"]["Tables"]["education_provider_publicity"]["Insert"];
  targets: Database["public"]["Tables"]["education_provider_targets"]["Insert"];
  terrains: Database["public"]["Tables"]["education_provider_terrains"]["Insert"];
  types: Database["public"]["Tables"]["education_provider_types"]["Insert"];
};
