import { CheckboxInput } from "@/components/Inputs";
import { useFormContext } from "react-hook-form";

const regions = [
  { name: "praha", label: "Hlavní město Praha" },
  { name: "stredocesky_kraj", label: "Středočeský kraj" },
  { name: "jihocesky_kraj", label: "Jihočeský kraj" },
  { name: "plzensky_kraj", label: "Plzeňský kraj" },
  { name: "karlovarsky_kraj", label: "Karlovarský kraj" },
  { name: "ustecky_kraj", label: "Ústecký kraj" },
  { name: "liberecky_kraj", label: "Liberecký kraj" },
  { name: "kralovehradecky_kraj", label: "Královéhradecký kraj" },
  { name: "pardubicky_kraj", label: "Pardubický kraj" },
  { name: "vysocina", label: "Kraj Vysočina" },
  { name: "jihomoravsky_kraj", label: "Jihomoravský kraj" },
  { name: "olomoucky_kraj", label: "Olomoucký kraj" },
  { name: "moravskoslezsky_kraj", label: "Moravskoslezský kraj" },
  { name: "zlinsky_kraj", label: "Zlínský kraj" },
];

export const Locations = () => {
  const { setValue } = useFormContext();

  const handleCheckAll = (checked: boolean) => {
    regions.forEach((region) => setValue(region.name, checked));
  };

  return (
    <section>
      <h2 className="text-lg font-bold text-left mb-8">
        Kde kurzy zejména pořádáte?
      </h2>
      <div className="flex gap-4 flex-col mb-6">
        <div className="mb-4 flex gap-2">
          <input
            id="all"
            type="checkbox"
            className="py-2 px-4 text-foreground bg-background rounded-[8px] border-foreground border-[1px] self-start w-5 h-5"
            onChange={(e) => handleCheckAll(e.target.checked)}
          />
          <label htmlFor="all" className="font-bold self-start">
            Všude
          </label>
        </div>
        {regions.map((region) => {
          return (
            <CheckboxInput
              key={region.name}
              name={region.name}
              label={region.label}
            />
          );
        })}
        ;
      </div>
    </section>
  );
};
