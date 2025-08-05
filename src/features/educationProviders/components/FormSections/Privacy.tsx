import { CheckboxInput } from "@/components/Inputs";

export const Privacy = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Nabízíte kurzy veřejné nebo soukromé?
    </h2>
    <div className="flex gap-4 flex-col mb-6">
      <CheckboxInput name="public" label="Veřejné" />
      <CheckboxInput name="private" label="Soukromé" />
    </div>
  </section>
);
