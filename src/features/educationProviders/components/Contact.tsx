import { Input } from "@/components/Input";

export const Contact = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">
      Jak je Vás možné zkontaktovat?
    </h2>
    <Input name="email" type="email" label="Email*" />
    <Input name="websiteUrl" type="text" label="Web*" />
    <Input name="phone" type="text" label="Telefon" />
    <Input name="facebook" type="text" label="Facebook" />
    <Input name="instagram" type="text" label="Instagram" />
  </section>
);
