import { useFormContext } from "react-hook-form";

interface TextInputProps {
  name: string;
  placeholder?: string;
  label: string;
  type?: string;
}

export const TextInput = (props: TextInputProps) => {
  const { register, formState } = useFormContext();

  return (
    <div className="mb-4 flex gap-2 flex-col">
      <label htmlFor={props.name} className="font-bold self-start">
        {props.label}
      </label>
      <input
        id={props.name}
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        {...register(props.name)}
        className="py-2 px-4 text-foreground bg-background rounded-[8px] border-foreground border-[1px]"
      />
      {formState.errors[props.name] ? (
        <span className="text-accent self-start">
          {formState.errors[props.name]?.message?.toString()}
        </span>
      ) : (
        <span className="min-h-6" />
      )}
    </div>
  );
};
