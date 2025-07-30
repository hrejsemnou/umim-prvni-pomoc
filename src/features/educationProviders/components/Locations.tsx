import { Input } from "@/components/Input";

export const Locations = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Kde kurzy zejména pořádáte?
    </h2>
    <Input name="everywhere" type="checkbox" label="Všude" />
    <div className="max-w-48 mt-4">
      <Input name="region" type="text" label="Regiony" />
    </div>
  </section>
);
