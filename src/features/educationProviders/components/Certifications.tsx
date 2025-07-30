import { Input } from "@/components/Input";

export const Certifications = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Mají Vaše kurzy nějakou specifickou akreditaci?
    </h2>
    <div className="flex gap-8 flex-wrap">
      <Input
        name="zza_msmt"
        type="checkbox"
        label="Zdravotník zotavovacích akcí od MŠMT"
      />
      <Input name="dvpp_msmt" type="checkbox" label="DVPP od MŠMT" />
      <Input name="mpsv" type="checkbox" label="Akreditace of MPSV" />
      <Input name="mzcr" type="checkbox" label="MZČR" />
    </div>
  </section>
);
