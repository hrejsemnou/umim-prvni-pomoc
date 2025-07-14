import { Input } from "@/components/Input";

export const Accessibility = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">Přístupnost</h2>
    <div className="flex gap-4 flex-wrap">
      <Input name="no_barriers" type="checkbox" label="Bez bariér" />
      <Input name="hearing_impaired" type="checkbox" label="Neslyšící" />
      <Input name="sight_impaired" type="checkbox" label="Nevidomí" />
    </div>
  </section>
);
