"use client";
import { useAddEducationProviderMutation } from "@/lib/store/supabaseApi";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { CombinedFormSchema } from "@/features/educationProviders/components/FormSchemas";
import { Base } from "@/features/educationProviders/components/Base";
import { Accessibility } from "@/features/educationProviders/components/Accessibility";
import { Contact } from "@/features/educationProviders/components/Contact";
import { Focus } from "@/features/educationProviders/components/Focus";
import { Locations } from "@/features/educationProviders/components/Locations";
import { Privacy } from "@/features/educationProviders/components/Privacy";
import { Targets } from "@/features/educationProviders/components/Targets";
import { Methods } from "@/features/educationProviders/components/Methods";
import { Types } from "@/features/educationProviders/components/Types";
import { Certifications } from "@/features/educationProviders/components/Certifications";
import { Plurality } from "@/features/educationProviders/components/Plurality";

type FormData = z.infer<typeof CombinedFormSchema>;

const EducationProvidersForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(CombinedFormSchema),
    mode: "all",
  });

  const [addEducationProvider] = useAddEducationProviderMutation();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const combinedData = {
      base: { name: data.name, subname: data.subname, active: false },
      accessibility: {
        no_barriers: data.noBarriers,
        hearing_impaired: data.hearingImpaired,
        sight_impaired: data.sightImpaired,
      },
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
        everywhere: data.everywhere,
        region: data.region,
      },
      privacy: {
        public: data.public,
        private: data.private,
      },
      plurality: {
        individuals: data.individuals,
        groups: data.groups,
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
        masking: data.masking,
        vr: data.vr,
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
    } catch (err) {
      console.error("Failed to create provider:", err);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 px-6 py-6 sm:border-[1px] sm:rounded-2xl"
      >
        <Base />

        <hr className="mb-6 mt-6" />

        <Contact />

        <hr className="mb-6 mt-6" />

        <Types />

        <hr className="mb-6 mt-6" />

        <Targets />

        <hr className="mb-6 mt-6" />

        <Accessibility />

        <hr className="mb-6 mt-6" />

        <Focus />

        <hr className="mb-6 mt-6" />

        <Locations />

        <hr className="mb-6 mt-6" />

        <Privacy />

        <hr className="mb-6 mt-6" />

        <Plurality />

        <hr className="mb-6 mt-6" />

        <Methods />

        <hr className="mb-6 mt-6" />

        <Certifications />

        <hr className="mb-6 mt-6" />

        <button
          type="submit"
          className="text-background font-bold color-foreground self-center bg-primary rounded-[8px] py-2 px-4 disabled:opacity-50"
        >
          Odeslat
        </button>
      </form>
    </FormProvider>
  );
};

export default EducationProvidersForm;
