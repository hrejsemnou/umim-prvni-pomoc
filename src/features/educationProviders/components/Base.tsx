import { Input } from "@/components/Input";

export const Base = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">Jak se jmenujete?</h2>
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
