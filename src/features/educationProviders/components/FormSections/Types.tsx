import { CheckboxInput, TextInput } from "@/components/Inputs";

export const Types = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Jaké druhy vzdělávání poskytujete?
    </h2>
    <div className="flex gap-4 flex-col">
      <CheckboxInput name="courseLive" label="Kurzy živě" />
      <CheckboxInput name="courseOnline" label="Kurzy online" />
      <CheckboxInput name="literature" label="Literatura" />
      <CheckboxInput name="podcast" label="Podcasty" />
      <CheckboxInput
        name="event"
        label="Vzdělávací workshopy, přednášky a akce"
      />
      <CheckboxInput
        name="application"
        label="Vzdělávací weby, hry nebo programy"
      />
    </div>
    <div className="max-w-48 mt-4">
      <TextInput name="otherTypes" label="Něco jiného?" />
    </div>
  </section>
);
