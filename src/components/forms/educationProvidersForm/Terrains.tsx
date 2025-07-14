import { Input } from "@/components/forms/Input";

export const Terrains = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-4">Terénnost</h2>
    <div className="flex gap-4 flex-wrap">
      <Input name="masking" type="checkbox" label="Maskování" />
      <Input name="theory" type="checkbox" label="Teorie" />
      <Input name="vr" type="checkbox" label="VR" />
    </div>
  </section>
);
