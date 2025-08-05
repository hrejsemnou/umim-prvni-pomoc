import { TextInput, CheckboxInput } from "@/components/Inputs";

export const Methods = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Využíváte při kurzech nějakou specifickou metodiku?
    </h2>
    <div className="flex gap-4 flex-col mb-6">
      <CheckboxInput name="masking" label="Maskování" />
      <CheckboxInput name="vr" label="VR" />
    </div>
    <div className="max-w-48 mt-4">
      <TextInput name="otherMethod" label="Jiná metodika?" />
    </div>
  </section>
);
