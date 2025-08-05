import { CheckboxInput } from "@/components/Inputs";

export const Locations = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Kde kurzy zejména pořádáte?
    </h2>
    <div className="flex gap-4 flex-col mb-6">
      <CheckboxInput name="praha" label="Hlavní město Praha" />
      <CheckboxInput name="stredocesky_kraj" label="Středočeský kraj" />
      <CheckboxInput name="jihocesky_kraj" label="Jihočeský kraj" />
      <CheckboxInput name="plzensky_kraj" label="Plzeňský kraj" />
      <CheckboxInput name="karlovarsky_kraj" label="Karlovarský kraj" />
      <CheckboxInput name="ustecky_kraj" label="Ústecký kraj" />
      <CheckboxInput name="liberecky_kraj" label="Liberecký kraj" />
      <CheckboxInput name="kralovehradecky_kraj" label="Královéhradecký kraj" />
      <CheckboxInput name="pardubicky_kraj" label="Pardubický kraj" />
      <CheckboxInput name="vysocina" label="Kraj Vysočina" />
      <CheckboxInput name="jihomoravsky_kraj" label="Jihomoravský kraj" />
      <CheckboxInput name="olomoucky_kraj" label="Olomoucký kraj" />
      <CheckboxInput name="moravskoslezsky_kraj" label="Moravskoslezský kraj" />
      <CheckboxInput name="zlinsky_kraj" label="Zlínský kraj" />
    </div>
  </section>
);
