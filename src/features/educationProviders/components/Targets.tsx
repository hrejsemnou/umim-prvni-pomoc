import { Input } from "@/components/Input";

// TODO: Info hover
export const Targets = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">
      Jaké jsou cílové skupiny, které vzděláváte?
    </h2>
    <div className="flex gap-4 flex-wrap">
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
      <Input name="otherTargets" type="text" label="Jiné" />
    </div>
  </section>
);
