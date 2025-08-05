import { TextInput } from "@/components/Inputs";

export const Contact = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Jak je vás možné zkontaktovat?
    </h2>
    <TextInput name="email" label="Email*" />
    <div className="flex justify-between">
      <TextInput name="websiteUrl" label="Web*" />
      <TextInput name="phone" label="Telefon" />
    </div>
    <div className="flex justify-between">
      <TextInput name="facebook" label="Facebook" />
      <TextInput name="instagram" label="Instagram" />
    </div>
  </section>
);
