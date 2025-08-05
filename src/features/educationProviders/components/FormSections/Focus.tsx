import { TextInput, CheckboxInput } from "@/components/Inputs";
import { Tooltip } from "@/components/Tooltip";

export const Focus = () => (
  <section>
    <div className="mb-8 flex gap-2">
      <h2 className="text-lg font-bold text-left">
        Je vzdělávání, které poskytujete, specificky zaměřené?
      </h2>
      <Tooltip content="Učíte první pomoc ve specifické oblasti?" />
    </div>
    <div className="flex gap-4 flex-col">
      <CheckboxInput name="infants" label="První pomoc pro děti a miminka" />
      <CheckboxInput name="elderly" label="První pomoc pro seniory" />
      <CheckboxInput name="outdoor" label="Hory, turistika" />
      <CheckboxInput name="waterside" label="Vodní záchranář, plavčík" />
      <CheckboxInput name="paramedics" label="Zdravotník zotavovacích akcí" />
    </div>
    <div className="max-w-48 mt-4">
      <TextInput name="otherFocus" label="Jiné zaměření?" />
    </div>
  </section>
);
