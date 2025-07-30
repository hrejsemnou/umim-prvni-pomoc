import * as z from "zod";

export const BaseSchema = z.object({
  name: z.string().min(1, "Název nesmí být prázdný"),
  subname: z.string().optional(),
});

export const ContactSchema = z.object({
  email: z.string().min(1, "Email nesmí být prázdný").email("Neplatný email"),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  phone: z.string().optional(),
  websiteUrl: z.string().min(1, "Adresa webu nesmí být prázdná"),
});

export const FocusSchema = z.object({
  outdoor: z.boolean().optional(),
  infants: z.boolean().optional(),
  waterside: z.boolean().optional(),
  paramedics: z.boolean().optional(),
  elderly: z.boolean().optional(),
});

export const LocationsSchema = z.object({
  everywhere: z.boolean().optional(),
  region: z.string().optional(),
});

export const PrivacySchema = z.object({
  public: z.boolean().optional(),
  private: z.boolean().optional(),
});

export const PluralitySchema = z.object({
  individuals: z.boolean().optional(),
  groups: z.boolean().optional(),
});

export const TargetsSchema = z.object({
  pupils: z.boolean().optional(),
  adults: z.boolean().optional(),
  lectors: z.boolean().optional(),
  professionals: z.boolean().optional(),
  schools: z.boolean().optional(),
  otherTargets: z.string().optional(),
});

export const MethodsSchema = z.object({
  masking: z.boolean().optional(),
  vr: z.boolean().optional(),
});

export const TypesSchema = z.object({
  courseLive: z.boolean().optional(),
  courseOnline: z.boolean().optional(),
  literature: z.boolean().optional(),
  podcast: z.boolean().optional(),
  event: z.boolean().optional(),
  application: z.boolean().optional(),
  otherTypes: z.string().optional(),
});

export const CertificationsSchema = z.object({
  zza_msmt: z.boolean().optional(),
  dvpp_msmt: z.boolean().optional(),
  mpsv: z.boolean().optional(),
  mzcr: z.boolean().optional(),
});

export const CombinedFormSchema = z.object({
  ...BaseSchema.shape,
  ...ContactSchema.shape,
  ...FocusSchema.shape,
  ...LocationsSchema.shape,
  ...PrivacySchema.shape,
  ...PluralitySchema.shape,
  ...TargetsSchema.shape,
  ...MethodsSchema.shape,
  ...TypesSchema.shape,
  ...CertificationsSchema.shape,
});

export const getKeys = <T extends z.ZodRawShape>(
  shape: T,
): (keyof z.infer<z.ZodObject<T>>)[] =>
  Object.keys(shape) as (keyof z.infer<z.ZodObject<T>>)[];

export type FormData = z.infer<typeof CombinedFormSchema>;
