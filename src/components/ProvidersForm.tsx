"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().min(6, {
    message: "Email must be at least 6 characters.",
  }),
});

type FormData = z.infer<typeof FormSchema>;

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyNqHc87tXd7bTTaCgpqJoUXux3gB4Ueh26H463_qldenP8AusO3dYhaQPXL8IWmbmEFQ/exec";

const ProvidersForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(FormSchema) });

  const onSubmit = async (data: FormData) => {
    const { name, email } = data;
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email }),
      });

      // You won't know if it really succeeded — optimistic update
      alert("Form submitted!");
      reset(); // Clear form
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <label htmlFor="username" className="font-bold">
        Username
      </label>
      <input
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
        type="email"
        {...register("email")}
        className="py-2 px-4 text-foreground bg-background rounded-[8px] border-foreground border-[1px]"
      />
      {errors.email && <span>{errors.email.message}</span>}
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
