import { Input } from "@/components/Input";

export const Types = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Jaké druhy vzdělávání poskytujete?
    </h2>
    <div className="flex gap-4 flex-col">
      <Input name="courseLive" type="checkbox" label="Kurzy živě" />
      <Input name="courseOnline" type="checkbox" label="Kurzy online" />
      <Input name="literature" type="checkbox" label="Literatura" />
      <Input name="podcast" type="checkbox" label="Podcasty" />
      <Input
        name="event"
        type="checkbox"
        label="Vzdělávací akce nebo události"
      />
      <Input
        name="application"
        type="checkbox"
        label="Vzdělávací weby, hry nebo programy"
      />
    </div>
    <div className="max-w-48 mt-4">
      <Input name="otherTypes" type="text" label="Něco jiného?" />
    </div>
  </section>
);
