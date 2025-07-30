"use client";
import { useAddEducationProviderMutation } from "@/lib/store/api";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import {
  BaseSchema,
  CertificationsSchema,
  CombinedFormSchema,
  ContactSchema,
  FocusSchema,
  getKeys,
  LocationsSchema,
  MethodsSchema,
  PluralitySchema,
  PrivacySchema,
  TargetsSchema,
  TypesSchema,
} from "@/features/educationProviders/components/FormSchemas";
import { Base } from "@/features/educationProviders/components/Base";
import { Contact } from "@/features/educationProviders/components/Contact";
import { Focus } from "@/features/educationProviders/components/Focus";
import { Locations } from "@/features/educationProviders/components/Locations";
import { Privacy } from "@/features/educationProviders/components/Privacy";
import { Targets } from "@/features/educationProviders/components/Targets";
import { Methods } from "@/features/educationProviders/components/Methods";
import { Types } from "@/features/educationProviders/components/Types";
import { Certifications } from "@/features/educationProviders/components/Certifications";
import { Plurality } from "@/features/educationProviders/components/Plurality";
import { ReactElement, useState } from "react";
import clsx from "clsx";

type FormData = z.infer<typeof CombinedFormSchema>;

const EducationProvidersForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(CombinedFormSchema),
    mode: "all",
  });

  const [addEducationProvider] = useAddEducationProviderMutation();

  const [formSent, setFormSent] = useState<boolean>(false);
  const [step, setStep] = useState(0);

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const combinedData = {
      base: { name: data.name, subname: data.subname, active: false },
      contact: {
        email: data.email,
        facebook: data.facebook,
        instagram: data.instagram,
        phone: data.phone,
        website: data.websiteUrl,
      },
      focus: {
        children: data.infants,
        elderly: data.elderly,
        outdoor: data.outdoor,
        waterside: data.waterside,
        paramedics: data.paramedics,
      },
      locations: {
        everywhere: data.everywhere ?? false,
        region: data.region ?? "",
      },
      privacy: {
        public: data.public ?? false,
        private: data.private ?? false,
      },
      plurality: {
        individuals: data.individuals ?? false,
        groups: data.groups ?? false,
      },
      targets: {
        children: data.pupils,
        adults: data.adults,
        schools: data.schools,
        lectors: data.lectors,
        professionals: data.professionals,
        other: data.otherTargets,
      },
      methods: {
        masking: data.masking ?? false,
        vr: data.vr ?? false,
      },
      types: {
        course_live: data.courseLive,
        course_online: data.courseOnline,
        literature: data.literature,
        application: data.application,
        podcast: data.podcast,
        event: data.event,
        other: data.otherTypes,
      },
      certifications: {
        zza_msmt: data.zza_msmt,
        dvpp_msmt: data.dvpp_msmt,
        mpsv: data.mpsv,
        mzcr: data.mzcr,
      },
    };
    try {
      await addEducationProvider(combinedData).unwrap();
      setFormSent(true);
      scrollTo(0, 0);
    } catch (err) {
      console.error("Failed to create provider:", err);
    }
  };

  const courseLiveValue = methods.watch("courseLive");
  const courseOnlineValue = methods.watch("courseOnline");

  const steps: {
    id: number;
    component: ReactElement;
    fields: (keyof FormData)[];
  }[] = [
    {
      id: 0,
      component: <Base />,
      fields: getKeys(BaseSchema.shape),
    },
    {
      id: 1,
      component: <Contact />,
      fields: getKeys(ContactSchema.shape),
    },
    {
      id: 2,
      component: <Types />,
      fields: getKeys(TypesSchema.shape),
    },
    {
      id: 3,
      component: <Targets />,
      fields: getKeys(TargetsSchema.shape),
    },
    {
      id: 4,
      component: <Focus />,
      fields: getKeys(FocusSchema.shape),
    },
    ...(courseLiveValue
      ? [
          {
            id: 5,
            component: <Locations />,
            fields: getKeys(LocationsSchema.shape),
          },
        ]
      : []),
    ...(courseLiveValue || courseOnlineValue
      ? [
          {
            id: 6,
            component: <Privacy />,
            fields: getKeys(PrivacySchema.shape),
          },
          {
            id: 7,
            component: <Plurality />,
            fields: getKeys(PluralitySchema.shape),
          },
          {
            id: 8,
            component: <Methods />,
            fields: getKeys(MethodsSchema.shape),
          },
        ]
      : []),
    {
      id: 9,
      component: <Certifications />,
      fields: getKeys(CertificationsSchema.shape),
    },
  ];

  if (formSent) {
    return (
      <div>
        <p>Formulář byl úspěšně odeslán, děkujeme</p>
      </div>
    );
  } else {
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-lg flex-col gap-2 px-6 py-6 sm:border-[1px] sm:rounded-2xl"
        >
          <p className="mb-4">
            Krok: {step + 1} / {steps.length}
          </p>
          {steps[step].component}

          <div
            className={clsx(
              "flex",
              step === 0 ? "justify-end" : "justify-between",
            )}
          >
            {step > 0 && (
              <button
                className="text-background font-bold color-foreground bg-accent rounded-[8px] py-2 px-4 disabled:opacity-50 cursor-pointer"
                type="button"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  setStep(step - 1);
                }}
              >
                Zpět
              </button>
            )}

            {step < steps.length - 1 ? (
              <button
                className="text-background font-bold color-foreground bg-primary rounded-[8px] py-2 px-4 disabled:opacity-50 cursor-pointer"
                type="button"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  const fieldsToValidate = steps[step].fields;
                  methods.trigger(fieldsToValidate).then((valid) => {
                    if (valid) setStep(step + 1);
                  });
                }}
              >
                Další
              </button>
            ) : (
              <button
                type="submit"
                className="text-background font-bold color-foreground bg-primary rounded-[8px] py-2 px-4 disabled:opacity-50 cursor-pointer"
              >
                Odeslat
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    );
  }
};

export default EducationProvidersForm;
