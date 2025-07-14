import EducationProvidersForm from "@/features/educationProviders/components/EducationProvidersForm";

export default function EducationProviders() {
  return (
    <div className="text-center min-h-dvh md:gap-8 gap-4 py-12 flex flex-col">
      <h1 className="text-3xl font-bold">
        Poskytujete vzdělání v první pomoci?
      </h1>
      <p className="text-xl">Dejte nám o sobě vědět</p>
      <EducationProvidersForm />
    </div>
  );
}
