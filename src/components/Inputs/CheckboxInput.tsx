import { useFormContext } from "react-hook-form";

interface CheckboxInputProps {
  name: string;
  placeholder?: string;
  label: string;
}

export const CheckboxInput = (props: CheckboxInputProps) => {
  const { register, formState } = useFormContext();

  return (
    <div className="mb-4 flex gap-2">
      <input
        id={props.name}
        type="checkbox"
        placeholder={props.placeholder}
        {...register(props.name)}
        className="py-2 px-4 text-foreground bg-background rounded-[8px] border-foreground border-[1px] self-start w-5 h-5"
      />
      <label htmlFor={props.name} className="font-bold self-start">
        {props.label}
      </label>
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
