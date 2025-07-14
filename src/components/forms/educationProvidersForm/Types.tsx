import { Input } from "@/components/forms/Input";

export const Types = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">Druh vzdělání</h2>
    <div className="flex gap-4 flex-wrap">
      <Input name="game" type="checkbox" label="Hra" />
      <Input name="book" type="checkbox" label="Kniha" />
      <Input name="course" type="checkbox" label="Kurz" />
      <Input name="podcast" type="checkbox" label="Podcast" />
      <Input name="event" type="checkbox" label="Událost" />
      <Input name="website" type="checkbox" label="Web" />
    </div>
  </section>
);
