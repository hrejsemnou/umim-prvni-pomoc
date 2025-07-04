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
    try {
      await addEducationProvider(data).unwrap();
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
