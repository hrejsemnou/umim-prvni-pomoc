import { Input } from "@/components/Input";

export const Locations = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Kde kurzy zejména pořádáte?
    </h2>
    <div className="flex gap-4 flex-col mb-6">
      <Input name="praha" type="checkbox" label="Hlavní město Praha" />
      <Input name="stredocesky_kraj" type="checkbox" label="Středočeský kraj" />
      <Input name="jihocesky_kraj" type="checkbox" label="Jihočeský kraj" />
      <Input name="plzensky_kraj" type="checkbox" label="Plzeňský kraj" />
      <Input name="karlovarsky_kraj" type="checkbox" label="Karlovarský kraj" />
      <Input name="ustecky_kraj" type="checkbox" label="Ústecký kraj" />
      <Input name="liberecky_kraj" type="checkbox" label="Liberecký kraj" />
      <Input
        name="kralovehradecky_kraj"
        type="checkbox"
        label="Královéhradecký kraj"
      />
      <Input name="pardubicky_kraj" type="checkbox" label="Pardubický kraj" />
      <Input name="vysocina" type="checkbox" label="Kraj Vysočina" />
      <Input
        name="jihomoravsky_kraj"
        type="checkbox"
        label="Jihomoravský kraj"
      />
      <Input name="olomoucky_kraj" type="checkbox" label="Olomoucký kraj" />
      <Input
        name="moravskoslezsky_kraj"
        type="checkbox"
        label="Moravskoslezský kraj"
      />
      <Input name="zlinsky_kraj" type="checkbox" label="Zlínský kraj" />
    </div>
  </section>
);
