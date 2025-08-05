import { TextareaInput } from "@/components/Inputs";

export const AdditionalInfo = () => (
  <section>
    <h2 className="text-lg font-bold text-left mb-8">
      Je něco, na co jsme zapomněli?
    </h2>
    <TextareaInput
      name="otherAdditionalInfo"
      label="Doplňující informace k vašemu vzdělávání"
    />
    <TextareaInput
      name="feedback"
      label="Zpětná vazba k formuláři, případně aplikaci jako takové"
    />
  </section>
);
