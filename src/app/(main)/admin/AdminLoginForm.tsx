"use client";
import { TextInput } from "@/components/Inputs";
import { supabase } from "@/lib/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  email: z
    .string()
    .email("Zadejte validní email")
    .min(1, "Email nesmí být prázdný"),
  password: z.string().min(1, "Heslo nemůže být prázdné"),
});

type FormData = z.infer<typeof FormSchema>;

const AdminLoginForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      console.error("Failed to login:", err);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 px-6 py-6 sm:border-[1px] sm:rounded-2xl"
      >
        <section>
          <h2 className="text-lg font-bold text-left mb-4">
            Zadejte přihlašovací údaje
          </h2>
          <TextInput name="email" placeholder="" label="Email*" />
          <TextInput
            name="password"
            type="password"
            placeholder=""
            label="Heslo*"
          />
        </section>
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

export default AdminLoginForm;
