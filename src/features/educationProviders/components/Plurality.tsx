import { Input } from "@/components/Input";

export const Plurality = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Nabízíte kurzy pro jednotlivce nebo pro skupiny?
    </h2>
    <div className="flex gap-4 flex-wrap">
      <Input name="individuals" type="checkbox" label="Jednotlivci" />
      <Input name="groups" type="checkbox" label="Skupiny" />
    </div>
  </section>
);
