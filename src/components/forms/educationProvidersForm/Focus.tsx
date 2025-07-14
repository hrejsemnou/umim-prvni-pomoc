import { Input } from "@/components/forms/Input";

export const Focus = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">Zaměření</h2>
    <div className="flex gap-4 flex-wrap">
      <Input name="mountains" type="checkbox" label="Hory" />
      <Input name="infants" type="checkbox" label="Děti" />
      <Input name="waterside" type="checkbox" label="Voda" />
      <Input name="paramedics" type="checkbox" label="Záchranáři" />
    </div>
  </section>
);
