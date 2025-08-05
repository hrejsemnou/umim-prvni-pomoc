import { useFormContext } from "react-hook-form";

interface StepNavigationProps {
  step: number;
  totalSteps: number;
  onBack: () => void;
  onNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const StepNavigation = ({
  step,
  totalSteps,
  onBack,
  onNext,
}: StepNavigationProps) => {
  const { formState } = useFormContext();

  return (
    <div className={`flex ${step === 0 ? "justify-end" : "justify-between"}`}>
      {step > 0 && (
        <button
          type="button"
          onClick={onBack}
          className="text-background font-bold color-foreground bg-accent rounded-[8px] py-2 px-4 cursor-pointer"
        >
          Zpět
        </button>
      )}
      {step < totalSteps - 1 ? (
        <button
          type="button"
          onClick={onNext}
          className="text-background font-bold color-foreground bg-primary rounded-[8px] py-2 px-4 cursor-pointer"
        >
          Další
        </button>
      ) : (
        <button
          type="submit"
          className="text-background font-bold color-foreground bg-primary rounded-[8px] py-2 px-4 cursor-pointer disabled:opacity-50"
          disabled={formState.isSubmitting}
        >
          Odeslat
        </button>
      )}
    </div>
  );
};
