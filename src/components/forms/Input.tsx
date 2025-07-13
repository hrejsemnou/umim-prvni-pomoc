import clsx from "clsx";
import { FieldError, useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  error?: FieldError;
}

export const Input = (props: InputProps) => {
  const { register } = useFormContext();

  return (
    <div
      className={clsx(
        "mb-4 flex gap-2",
        props.type !== "checkbox" && "flex-col",
      )}
    >
      <label
        htmlFor={props.name}
        className={clsx(
          "font-bold self-start",
          props.type === "checkbox" ? "order-2" : "order-1",
        )}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        {...register(props.name)}
        className={clsx(
          "py-2 px-4 text-foreground bg-background order-1 rounded-[8px] border-foreground border-[1px]",
          props.type === "checkbox" && "self-start w-5 h-5",
          props.type === "checkbox" ? "order-1" : "order-2",
        )}
      />
      {props.error && (
        <span className="text-accent self-start order-3">
          {props.error.message}
        </span>
      )}
    </div>
  );
};
