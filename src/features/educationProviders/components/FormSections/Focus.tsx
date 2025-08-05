import { Input } from "@/components/Input";
import { Tooltip } from "@/components/Tooltip";

//TODO: Add info
export const Focus = () => (
  <section>
    <div className="mb-8 flex gap-2">
      <h2 className="text-lg font-bold text-left">
        Je vzdělávání, které poskytujete, specificky zaměřené?
      </h2>
      <Tooltip content="Učíte první pomoc ve specifické oblasti?" />
    </div>
    <div className="flex gap-4 flex-col mb-6">
      <Input
        name="infants"
        type="checkbox"
        label="První pomoc pro děti a miminka"
      />
      <Input name="elderly" type="checkbox" label="První pomoc pro seniory" />
      <Input name="outdoor" type="checkbox" label="Hory, turistika" />
      <Input
        name="waterside"
        type="checkbox"
        label="Vodní záchranář, plavčík"
      />
      <Input
        name="paramedics"
        type="checkbox"
        label="Zdravotník zotavovacích akcí"
      />
    </div>
  </section>
);
