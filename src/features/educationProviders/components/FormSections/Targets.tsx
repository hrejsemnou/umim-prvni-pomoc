import { CheckboxInput, TextInput } from "@/components/Inputs";
import { Tooltip } from "@/components/Tooltip";

export const Targets = () => (
  <section>
    <div className="flex mb-8 gap-2">
      <h2 className="text-lg font-bold text-left">
        Jaké jsou cílové skupiny, které vzděláváte?
      </h2>
      <Tooltip content="Kdo je ten, kdo se učí?" />
    </div>
    <div className="flex gap-4 flex-col">
      <CheckboxInput name="pupils" label="Děti, žáci, studenti" />
      <CheckboxInput name="adults" label="Dospělí" />
      <CheckboxInput
        name="schools"
        label="Personál škol, dětských skupin a chůvy"
      />
      <CheckboxInput name="lectors" label="Lektoři kurzů první pomoci" />
      <CheckboxInput
        name="professionals"
        label="Zdravotní a záchranný personál"
      />
    </div>

    <div className="max-w-48 mt-4">
      <TextInput name="otherTargets" label="Jiné skupiny?" />
    </div>
  </section>
);
