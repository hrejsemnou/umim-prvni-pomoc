import { Input } from "@/components/forms/Input";

export const Contact = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">Kontaktní údaje</h2>
    <Input name="email" type="email" label="Email*" />
    <Input name="facebook" type="text" label="Facebook" />
    <Input name="instagram" type="text" label="Instagram" />
    <Input name="phone" type="text" label="Telefon" />
    <Input name="websiteUrl" type="text" label="Web" />
  </section>
);
