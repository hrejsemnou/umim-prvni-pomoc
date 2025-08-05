import { CheckboxInput } from "@/components/Inputs";

export const Plurality = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Nabízíte kurzy pro jednotlivce nebo pro skupiny?
    </h2>
    <div className="flex gap-4 flex-col mb-6">
      <CheckboxInput name="individuals" label="Jednotlivci" />
      <CheckboxInput name="groups" label="Skupiny" />
    </div>
  </section>
);
