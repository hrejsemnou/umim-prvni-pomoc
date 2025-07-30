import { Input } from "@/components/Input";

export const Privacy = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Nabízíte kurzy veřejné nebo soukromé?
    </h2>
    <div className="flex gap-4 flex-col mb-6">
      <Input name="public" type="checkbox" label="Veřejné" />
      <Input name="private" type="checkbox" label="Soukromé" />
    </div>
  </section>
);
