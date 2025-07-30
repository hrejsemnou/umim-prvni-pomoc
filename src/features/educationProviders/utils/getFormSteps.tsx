import { ReactElement } from "react";

import { Base } from "@/features/educationProviders/components/FormSections/Base";
import { Contact } from "@/features/educationProviders/components/FormSections/Contact";
import { Focus } from "@/features/educationProviders/components/FormSections/Focus";
import { Locations } from "@/features/educationProviders/components/FormSections/Locations";
import { Privacy } from "@/features/educationProviders/components/FormSections/Privacy";
import { Targets } from "@/features/educationProviders/components/FormSections/Targets";
import { Methods } from "@/features/educationProviders/components/FormSections/Methods";
import { Types } from "@/features/educationProviders/components/FormSections/Types";
import { Certifications } from "@/features/educationProviders/components/FormSections/Certifications";
import { Plurality } from "@/features/educationProviders/components/FormSections/Plurality";

import {
  BaseSchema,
  ContactSchema,
  TypesSchema,
  TargetsSchema,
  FocusSchema,
  LocationsSchema,
  PrivacySchema,
  PluralitySchema,
  MethodsSchema,
  CertificationsSchema,
  getKeys,
  FormData,
} from "@/features/educationProviders/components/FormSchemas";

export const getFormSteps = (
  courseLive: boolean,
  courseOnline: boolean,
): {
  id: number;
  component: ReactElement;
  fields: (keyof FormData)[];
}[] => [
  { id: 0, component: <Base />, fields: getKeys(BaseSchema.shape) },
  { id: 1, component: <Contact />, fields: getKeys(ContactSchema.shape) },
  { id: 2, component: <Types />, fields: getKeys(TypesSchema.shape) },
  { id: 3, component: <Targets />, fields: getKeys(TargetsSchema.shape) },
  { id: 4, component: <Focus />, fields: getKeys(FocusSchema.shape) },
  ...(courseLive
    ? [
        {
          id: 5,
          component: <Locations />,
          fields: getKeys(LocationsSchema.shape),
        },
      ]
    : []),
  ...(courseLive || courseOnline
    ? [
        { id: 6, component: <Privacy />, fields: getKeys(PrivacySchema.shape) },
        {
          id: 7,
          component: <Plurality />,
          fields: getKeys(PluralitySchema.shape),
        },
        { id: 8, component: <Methods />, fields: getKeys(MethodsSchema.shape) },
      ]
    : []),
  {
    id: 9,
    component: <Certifications />,
    fields: getKeys(CertificationsSchema.shape),
  },
];
