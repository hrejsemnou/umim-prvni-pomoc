import { Input } from "@/components/Input";

export const Locations = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">
      Kde kurzy zejména pořádáte?
    </h2>
    <Input name="everywhere" type="checkbox" label="Všude" />
    <Input name="region" type="text" label="Regiony" />
  </section>
);
