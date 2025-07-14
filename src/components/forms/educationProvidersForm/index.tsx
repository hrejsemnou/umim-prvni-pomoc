"use client";
import { useAddEducationProviderMutation } from "@/lib/store/supabaseApi";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { CombinedFormSchema } from "@/components/forms/educationProvidersForm/FormSchemas";
import { Base } from "@/components/forms/educationProvidersForm/Base";
import { Accessibility } from "@/components/forms/educationProvidersForm/Accessibility";
import { Contact } from "@/components/forms/educationProvidersForm/Contact";
import { Form } from "@/components/forms/educationProvidersForm/Form";
import { Focus } from "@/components/forms/educationProvidersForm/Focus";
import { Locations } from "@/components/forms/educationProvidersForm/Locations";
import { Publicity } from "@/components/forms/educationProvidersForm/Publicity";
import { Targets } from "@/components/forms/educationProvidersForm/Targets";
import { Terrains } from "@/components/forms/educationProvidersForm/Terrains";
import { Types } from "@/components/forms/educationProvidersForm/Types";

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
        no_barriers: data.no_barriers,
        hearing_impaired: data.hearing_impaired,
        sight_impaired: data.sight_impaired,
      },
      contact: {
        email: data.email,
        facebook: data.facebook,
        instagram: data.instagram,
        phone: data.phone,
        website: data.websiteUrl,
      },
      focus: {
        mountains: data.mountains,
        infants: data.infants,
        waterside: data.waterside,
        paramedics: data.paramedics,
      },
      form: {
        live: data.live,
        online: data.online,
      },
      locations: {
        everywhere: data.everywhere,
        region: data.region,
      },
      publicity: {
        public: data.public,
        private: data.private,
      },
      targets: {
        children: data.children,
        adults: data.adults,
        lectors: data.lectors,
        professionals: data.professionals,
        elderly: data.elderly,
        teams_driving_schools: data.teams_driving_schools,
        teams_schools: data.teams_schools,
        teams_companies: data.teams_companies,
      },
      terrains: {
        masking: data.masking,
        theory: data.theory,
        vr: data.vr,
      },
      types: {
        game: data.game,
        book: data.book,
        course: data.course,
        podcast: data.podcast,
        event: data.event,
        website: data.website,
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

        <Form />

        <hr className="mb-6 mt-6" />

        <Locations />

        <hr className="mb-6 mt-6" />

        <Publicity />

        <hr className="mb-6 mt-6" />

        <Terrains />

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
