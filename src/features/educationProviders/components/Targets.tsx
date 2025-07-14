import { Input } from "@/components/Input";

export const Targets = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">Cílová skupina</h2>
    <div className="flex gap-4 flex-wrap">
      <Input name="children" type="checkbox" label="Děti" />
      <Input name="adults" type="checkbox" label="Dospělí" />
      <Input name="lectors" type="checkbox" label="Lektoři" />
      <Input name="professionals" type="checkbox" label="Odborníci" />
      <Input name="elderly" type="checkbox" label="Senioři" />
      <Input name="teams_driving_schools" type="checkbox" label="Autoškoly" />
      <Input name="teams_schools" type="checkbox" label="Školy" />
      <Input name="teams_companies" type="checkbox" label="Firmy" />
    </div>
  </section>
);
