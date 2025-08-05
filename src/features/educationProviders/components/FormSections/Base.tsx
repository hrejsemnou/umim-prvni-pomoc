import { TextInput, ImageInput } from "@/components/Inputs";

export const Base = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">Jak se jmenujete?</h2>
    <TextInput name="name" placeholder="Umím první pomoc" label="Název*" />
    <TextInput
      name="subname"
      placeholder="První český vyhledávač vzdělání v první pomoci"
      label="Podnázev"
    />
    <ImageInput name="image" label="Logo" />
  </section>
);
