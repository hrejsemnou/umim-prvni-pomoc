import { useFormContext } from "react-hook-form";
import { Tooltip } from "@/components/Tooltip";

interface ImageInputProps {
  name: string;
  label: string;
}

export const ImageInput = ({ name, label }: ImageInputProps) => {
  const { register, formState, watch } = useFormContext();
  const file = watch(name) as FileList | undefined;
  const selectedFileName = file?.[0]?.name ?? null;

  const error = formState.errors[name];

  return (
    <div className="mb-4 flex flex-col gap-2">
      <div className="flex gap-2">
        <label className="font-bold self-start">{label}</label>
        <Tooltip content="Logo by mělo mít čtvercový formát a nemělo by přesahovat 5MB." />
      </div>

      <div className="flex flex-col items-start gap-2">
        <input
          id={name}
          type="file"
          accept="image/*"
          {...register(name)}
          className="hidden"
        />

        <label
          htmlFor={name}
          className="cursor-pointer inline-block bg-background border-[1px] border-primary text-primary px-4 py-2 rounded-[8px]"
        >
          Vyberte soubor
        </label>

        {selectedFileName ? (
          <span className="text-sm text-foreground">{selectedFileName}</span>
        ) : (
          <span className="h-5" />
        )}
      </div>

      {error ? (
        <span className="text-accent self-start">
          {error.message?.toString()}
        </span>
      ) : (
        <span className="min-h-6" />
      )}
    </div>
  );
};
