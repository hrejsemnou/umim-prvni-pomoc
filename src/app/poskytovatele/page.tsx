"use client";

import ProvidersForm from "@/components/ProvidersForm";
import { useGetPendingEducationProvidersQuery } from "@/lib/store/supabaseApi";
import { useGetActiveEducationProvidersQuery } from "@/lib/store/supabaseApi";

export default function Providers() {
  const {
    data: activeEducationProviders,
    isLoading: isActiveProvidersLoading,
  } = useGetActiveEducationProvidersQuery();
  const {
    data: pendingEducationProviders,
    isLoading: isPendingProvidersLoading,
  } = useGetPendingEducationProvidersQuery();
  if (isActiveProvidersLoading || isPendingProvidersLoading) {
    return <p>Loading</p>;
  } else {
    return (
      <div className="text-center max-w-xl max-h-dvh md:gap-8 gap-4 py-4 flex flex-col">
        <h1 className="text-3xl font-bold mb-6">Active Education Providers</h1>
        <ul>
          {activeEducationProviders?.map((p) => (
            <li key={p.id}>
              {p.nazev} - {p.podnazev}
            </li>
          ))}
        </ul>
        <br />
        <h1 className="text-3xl font-bold mb-6">Pendign Education Providers</h1>
        <ul>
          {pendingEducationProviders?.map((p) => (
            <li key={p.id}>
              {p.nazev} - {p.podnazev}
            </li>
          ))}
        </ul>
        <ProvidersForm />
      </div>
    );
  }
}
