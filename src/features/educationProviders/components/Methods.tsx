import { Input } from "@/components/Input";

export const Methods = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Využíváte při kurzech nějakou specifickou metodiku?
    </h2>
    <div className="flex gap-4 flex-col mb-6">
      <Input name="masking" type="checkbox" label="Maskování" />
      <Input name="vr" type="checkbox" label="VR" />
    </div>
  </section>
);
