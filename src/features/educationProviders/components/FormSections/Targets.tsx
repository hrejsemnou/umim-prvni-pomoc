import { Input } from "@/components/Input";
import { Tooltip } from "@/components/Tooltip";

// TODO: Info hover
export const Targets = () => (
  <section>
    <div className="flex mb-8 gap-2">
      <h2 className="text-lg font-bold text-left">
        Jaké jsou cílové skupiny, které vzděláváte?
      </h2>
      <Tooltip content="Kdo je ten, kdo se učí?" />
    </div>
    <div className="flex gap-4 flex-col">
      <Input name="pupils" type="checkbox" label="Děti, žáci, studenti" />
      <Input name="adults" type="checkbox" label="Dospělí" />
      <Input
        name="schools"
        type="checkbox"
        label="Personál škol, dětských skupin a chůvy"
      />
      <Input
        name="lectors"
        type="checkbox"
        label="Lektoři kurzů první pomoci"
      />
      <Input
        name="professionals"
        type="checkbox"
        label="Zdravotní a záchranný personál"
      />
    </div>

    <div className="max-w-48 mt-4">
      <Input name="otherTargets" type="text" label="Jiné skupiny?" />
    </div>
  </section>
);
