"use client";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  uploadImageAndGetUrl,
  useAddEducationProviderMutation,
} from "@/lib/store/api";
import {
  CombinedFormSchema,
  FormData,
} from "@/features/educationProviders/components/FormSchemas";
import { FormPrompt } from "@/features/educationProviders/components/FormPrompt";
import { getFormSteps } from "@/features/educationProviders/utils/getFormSteps";
import { StepNavigation } from "@/features/educationProviders/components/StepNavigation";
import { transformData } from "@/features/educationProviders/utils/transformData";

const EducationProvidersForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(CombinedFormSchema),
    mode: "all",
  });

  const [addEducationProvider] = useAddEducationProviderMutation();

  const [formSent, setFormSent] = useState<boolean>(false);
  const [step, setStep] = useState(0);

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    let imageUrl = "";
    if (data.image?.length !== 0) {
      try {
        imageUrl = await uploadImageAndGetUrl(
          data.image[0],
          `${data.name}-${Date.now()}`,
        );
      } catch (err) {
        console.error("Failed to upload logo:", err);
      }
    }

    try {
      await addEducationProvider(transformData(data, imageUrl)).unwrap();
      setFormSent(true);
      scrollTo(0, 0);
    } catch (err) {
      console.error("Failed to create provider:", err);
    }
  };

  const courseLiveValue = methods.watch("courseLive") ?? false;
  const courseOnlineValue = methods.watch("courseOnline") ?? false;
  const steps = getFormSteps(courseLiveValue, courseOnlineValue);

  if (formSent) {
    return (
      <div>
        <p>Formulář byl úspěšně odeslán, děkujeme</p>
      </div>
    );
  } else {
    return (
      <FormProvider {...methods}>
        <FormPrompt hasUnsavedChanges={methods.formState.isDirty} />
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-lg flex-col gap-2 px-6 py-6 sm:border-[1px] sm:rounded-2xl"
        >
          <p className="mb-4">
            Krok: {step + 1} / {steps.length}
          </p>
          {steps[step].component}

          <StepNavigation
            step={step}
            totalSteps={steps.length}
            onBack={() => setStep(step - 1)}
            onNext={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              const fieldsToValidate = steps[step].fields;
              methods.trigger(fieldsToValidate).then((valid) => {
                if (valid) setStep(step + 1);
              });
            }}
          />
        </form>
      </FormProvider>
    );
  }
};

export default EducationProvidersForm;
