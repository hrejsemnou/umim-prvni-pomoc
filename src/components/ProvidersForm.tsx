"use client";
import { useAddEducationProviderMutation } from "@/lib/store/supabaseApi";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  name: z.string(),
  subname: z.string(),
});

type FormData = z.infer<typeof FormSchema>;

const ProvidersForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(FormSchema) });

  const [addEducationProvider] = useAddEducationProviderMutation();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const finalData = {
      base: { ...data, active: false },
      accessibility: {
        no_barriers: true,
        hearing_impaired: false,
        sight_impaired: false,
      },
      contact: {
        email: "mail",
        facebook: "fejs",
        instagram: "instac",
        phone: "333",
        website: "www",
      },
      focus: {
        mountains: true,
        infants: true,
        waterside: true,
        paramedics: false,
      },
      form: {
        live: false,
        online: true,
      },
      locations: {
        everywhere: false,
        region: "Praha",
      },
      publicity: {
        public: true,
        private: true,
      },
      targets: {
        children: true,
        adults: true,
        lectors: true,
        professionals: true,
        elderly: true,
        teams_driving_schools: false,
        teams_schools: false,
        teams_companies: true,
      },
      terrains: {
        masking: true,
        theory: false,
        vr: true,
      },
      types: {
        game: true,
        book: false,
        course: false,
        podcast: true,
        event: true,
        website: true,
      },
    };
    try {
      await addEducationProvider(finalData).unwrap();
    } catch (err) {
      console.error("Failed to create provider:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <label htmlFor="username" className="font-bold">
        Username
      </label>
      <input
        type="text"
        placeholder="john.doe@example.com"
        {...register("name")}
        className="py-2 px-4 text-foreground bg-background rounded-[8px] border-foreground border-[1px]"
      />
      {errors.name && <span>{errors.name.message}</span>}
      <label htmlFor="password" className="font-bold">
        Password
      </label>
      <input
        placeholder="12345"
        type="text"
        {...register("subname")}
        className="py-2 px-4 text-foreground bg-background rounded-[8px] border-foreground border-[1px]"
      />
      <button
        type="submit"
        className="text-background font-bold color-foreground self-end bg-blue-500 rounded-[8px] py-2 px-4"
      >
        Log In
      </button>
    </form>
  );
};

export default ProvidersForm;
