"use client";

import ProvidersForm from "@/components/ProvidersForm";
import { useGetEducationProvidersQuery } from "@/lib/store/supabaseApi";

export default function Providers() {
  const { data: educationProviders, isLoading: isEducationProvidersLoading } =
    useGetEducationProvidersQuery();
  if (isEducationProvidersLoading) {
    return <p>Loading</p>;
  } else {
    return (
      <div className="text-center max-w-xl max-h-dvh md:gap-8 gap-4 py-4 flex flex-col">
        <h1 className="text-3xl font-bold mb-6">Active Education Providers</h1>
        <ul>
          {educationProviders?.map((p) => (
            <li key={p.id}>
              {p.name} - {p.subname}
            </li>
          ))}
        </ul>
        <br />
        <ProvidersForm />
      </div>
    );
  }
}
