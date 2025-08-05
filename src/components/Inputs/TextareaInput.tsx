import { useFormContext } from "react-hook-form";

interface TextareaInputProps {
  name: string;
  placeholder?: string;
  label: string;
}

export const TextareaInput = (props: TextareaInputProps) => {
  const { register, formState } = useFormContext();

  return (
    <div className="mb-4 flex flex-col gap-2">
      <label htmlFor={props.name} className="font-bold self-start">
        {props.label}
      </label>
      <textarea
        id={props.name}
        placeholder={props.placeholder}
        {...register(props.name)}
        className="py-2 px-4 text-foreground bg-background order-1 rounded-[8px] border-foreground border-[1px]"
      />
      {formState.errors[props.name] ? (
        <span className="text-accent self-start order-3">
          {formState.errors[props.name]?.message?.toString()}
        </span>
      ) : (
        <span className="min-h-6 order-3" />
      )}
    </div>
  );
};
