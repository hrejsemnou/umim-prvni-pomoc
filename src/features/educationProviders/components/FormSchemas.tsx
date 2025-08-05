import * as z from "zod";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const BaseSchema = z.object({
  name: z.string().min(1, "Název nesmí být prázdný"),
  subname: z.string().optional(),
  image: z
    // https://github.com/orgs/react-hook-form/discussions/11096
    .any()
    .optional()
    .refine(
      (files) => {
        if (!files || files.length === 0) return true; // ✅ skip validation if empty
        return files.length > 0;
      },
      {
        message: "An image must be selected.",
      },
    )
    .refine(
      (files) => {
        if (!files || files.length === 0) return true; // ✅ skip validation if empty
        return files[0].size <= MAX_FILE_SIZE;
      },
      {
        message:
          "The image is too large. Please choose an image smaller than 5MB.",
      },
    )
    .refine(
      (files) => {
        if (!files || files.length === 0) return true; // ✅ skip validation if empty
        return ACCEPTED_IMAGE_TYPES.includes(files[0].type);
      },
      {
        message: "Please upload a valid image file (JPEG, PNG, or WebP).",
      },
    ),
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
  otherFocus: z.string().optional(),
});

export const LocationsSchema = z.object({
  jihomoravsky_kraj: z.boolean().optional(),
  karlovarsky_kraj: z.boolean().optional(),
  kralovehradecky_kraj: z.boolean().optional(),
  liberecky_kraj: z.boolean().optional(),
  moravskoslezsky_kraj: z.boolean().optional(),
  olomoucky_kraj: z.boolean().optional(),
  pardubicky_kraj: z.boolean().optional(),
  plzensky_kraj: z.boolean().optional(),
  praha: z.boolean().optional(),
  stredocesky_kraj: z.boolean().optional(),
  vysocina: z.boolean().optional(),
  zlinsky_kraj: z.boolean().optional(),
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
  otherMethod: z.string().optional(),
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

export const AdditionalInfoSchema = z.object({
  otherAdditionalInfo: z.string().optional(),
  feedback: z.string().optional(),
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
  ...AdditionalInfoSchema.shape,
});

export const getKeys = <T extends z.ZodRawShape>(
  shape: T,
): (keyof z.infer<z.ZodObject<T>>)[] =>
  Object.keys(shape) as (keyof z.infer<z.ZodObject<T>>)[];

export type FormData = z.infer<typeof CombinedFormSchema>;
