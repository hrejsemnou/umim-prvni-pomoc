import * as z from "zod";

const BaseSchema = z.object({
  name: z.string().min(1, "Název nesmí být prázdný"),
  subname: z.string().optional(),
});

const AccessibilitySchema = z.object({
  no_barriers: z.boolean().optional(),
  hearing_impaired: z.boolean().optional(),
  sight_impaired: z.boolean().optional(),
});

const ContactSchema = z.object({
  email: z.string().min(1, "Email nesmí být prázdný").email("Neplatný email"),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  phone: z.string().optional(),
  websiteUrl: z.string().optional(),
});

const FocusSchema = z.object({
  mountains: z.boolean().optional(),
  infants: z.boolean().optional(),
  waterside: z.boolean().optional(),
  paramedics: z.boolean().optional(),
});

const FormSchema = z.object({
  live: z.boolean().optional(),
  online: z.boolean().optional(),
});

const LocationsSchema = z.object({
  everywhere: z.boolean().optional(),
  region: z.string().optional(),
});

const PublicitySchema = z.object({
  public: z.boolean().optional(),
  private: z.boolean().optional(),
});

const TargetsSchema = z.object({
  children: z.boolean().optional(),
  adults: z.boolean().optional(),
  lectors: z.boolean().optional(),
  professionals: z.boolean().optional(),
  elderly: z.boolean().optional(),
  teams_driving_schools: z.boolean().optional(),
  teams_schools: z.boolean().optional(),
  teams_companies: z.boolean().optional(),
});

const TerrainsSchema = z.object({
  masking: z.boolean().optional(),
  theory: z.boolean().optional(),
  vr: z.boolean().optional(),
});

const TypesSchema = z.object({
  game: z.boolean().optional(),
  book: z.boolean().optional(),
  course: z.boolean().optional(),
  podcast: z.boolean().optional(),
  event: z.boolean().optional(),
  website: z.boolean().optional(),
});

export const CombinedFormSchema = z.object({
  ...BaseSchema.shape,
  ...AccessibilitySchema.shape,
  ...ContactSchema.shape,
  ...FocusSchema.shape,
  ...FormSchema.shape,
  ...LocationsSchema.shape,
  ...PublicitySchema.shape,
  ...TargetsSchema.shape,
  ...TerrainsSchema.shape,
  ...TypesSchema.shape,
});
