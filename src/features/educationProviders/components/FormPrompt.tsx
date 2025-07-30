import { useEffect } from "react";

export const FormPrompt = ({
  hasUnsavedChanges,
}: {
  hasUnsavedChanges: boolean;
}) => {
  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [hasUnsavedChanges]);
  return null;
};
