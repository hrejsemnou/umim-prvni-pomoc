import { Input } from "@/components/Input";

export const Contact = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Jak je vás možné zkontaktovat?
    </h2>
    <Input name="email" type="email" label="Email*" />
    <div className="flex justify-between">
      <Input name="websiteUrl" type="text" label="Web*" />
      <Input name="phone" type="text" label="Telefon" />
    </div>
    <div className="flex justify-between">
      <Input name="facebook" type="text" label="Facebook" />
      <Input name="instagram" type="text" label="Instagram" />
    </div>
  </section>
);
