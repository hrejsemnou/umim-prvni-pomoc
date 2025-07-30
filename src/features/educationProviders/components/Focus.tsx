import { Input } from "@/components/Input";

//TODO: Add info
export const Focus = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Je Vaše vzdělávání na něco zaměřené?
    </h2>
    <div className="flex gap-4 flex-col mb-6">
      <Input
        name="infants"
        type="checkbox"
        label="První pomoc pro děti a miminka"
      />
      <Input name="elderly" type="checkbox" label="První pomoc pro seniory" />
      <Input name="outdoor" type="checkbox" label="Hory, turistika" />
      <Input
        name="waterside"
        type="checkbox"
        label="Vodní záchranář, plavčík"
      />
      <Input
        name="paramedics"
        type="checkbox"
        label="Zdravotník zotavovacích akcí"
      />
    </div>
  </section>
);
