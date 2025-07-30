"use client";
import { useAddEducationProviderMutation } from "@/lib/store/api";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { CombinedFormSchema } from "@/features/educationProviders/components/FormSchemas";
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
import { useState } from "react";

type FormData = z.infer<typeof CombinedFormSchema>;

const EducationProvidersForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(CombinedFormSchema),
    mode: "all",
  });

  const [addEducationProvider] = useAddEducationProviderMutation();

  const [formSent, setFormSent] = useState<boolean>(false);

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
          className="flex max-w-xl flex-col gap-2 px-6 py-6 sm:border-[1px] sm:rounded-2xl"
        >
          <Base />

          <hr className="mb-6 mt-6" />

          <Contact />

          <hr className="mb-6 mt-6" />

          <Types />

          <hr className="mb-6 mt-6" />

          <Targets />

          <hr className="mb-6 mt-6" />

          <Focus />

          <hr className="mb-6 mt-6" />

          {courseLiveValue && (
            <>
              <Locations />

              <hr className="mb-6 mt-6" />
            </>
          )}
          {(courseLiveValue || courseOnlineValue) && (
            <>
              <Privacy />

              <hr className="mb-6 mt-6" />

              <Plurality />

              <hr className="mb-6 mt-6" />

              <Methods />

              <hr className="mb-6 mt-6" />
            </>
          )}

          <Certifications />

          <hr className="mb-6 mt-6" />

          <button
            type="submit"
            className="text-background font-bold color-foreground self-center bg-primary rounded-[8px] py-2 px-4 disabled:opacity-50 hover:bg-accent cursor-pointer"
          >
            Odeslat
          </button>
        </form>
      </FormProvider>
    );
  }
};

export default EducationProvidersForm;
