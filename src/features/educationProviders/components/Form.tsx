import { Input } from "@/components/Input";

export const Form = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">Forma</h2>
    <div className="flex gap-4 flex-wrap">
      <Input name="live" type="checkbox" label="Živě" />
      <Input name="online" type="checkbox" label="Online" />
    </div>
  </section>
);
