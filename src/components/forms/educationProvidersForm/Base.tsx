import { Input } from "@/components/forms/Input";

export const Base = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">Základní info</h2>
    <Input
      name="name"
      type="text"
      placeholder="Umím první pomoc"
      label="Název*"
    />
    <Input
      name="subname"
      type="text"
      placeholder="První český vyhledávač vzdělání v první pomoci"
      label="Podnázev"
    />
  </section>
);
