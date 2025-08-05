import { CheckboxInput } from "@/components/Inputs";

export const Certifications = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Mají kurzy, které poskytujete, akreditaci?
    </h2>
    <div className="flex gap-4 flex-col mb-6">
      <CheckboxInput
        name="zza_msmt"
        label="Zdravotník zotavovacích akcí od MŠMT"
      />
      <CheckboxInput name="dvpp_msmt" label="DVPP od MŠMT" />
      <CheckboxInput name="mpsv" label="Akreditace od MPSV" />
      <CheckboxInput name="mzcr" label="MZČR" />
    </div>
  </section>
);
