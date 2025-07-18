import { Input } from "@/components/Input";

export const Accessibility = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">Přístupnost</h2>
    <div className="flex gap-4 flex-wrap">
      <Input name="noBarriers" type="checkbox" label="Bez bariér" />
      <Input name="hearingImpaired" type="checkbox" label="Neslyšící" />
      <Input name="sightImpaired" type="checkbox" label="Nevidomí" />
    </div>
  </section>
);
