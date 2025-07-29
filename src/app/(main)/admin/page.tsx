"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";

import { useGetEducationProvidersQuery } from "@/lib/store/api";
import AdminLoginForm from "@/app/(main)/admin/AdminLoginForm";

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);

  // Get session on mount
  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setLoadingSession(false);
    };

    getSession();

    // Listen for session changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      },
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const { data: educationProviders, isLoading: isEducationProvidersLoading } =
    useGetEducationProvidersQuery(undefined, {
      skip: !session,
    });

  if (loadingSession || (session && isEducationProvidersLoading)) {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div className="text-center py-12 flex flex-col">
        <AdminLoginForm />
      </div>
    );
  }

  return (
    <div className="text-center min-h-dvh py-12 flex flex-col gap-6">
      <h1 className="text-3xl font-bold mb-6">Active Education Providers</h1>
      <ul>
        {educationProviders?.map((p) => (
          <li key={p.id}>
            {p.name} - {p.subname}
          </li>
        ))}
      </ul>
      <button
        className="bg-red-600 text-white rounded px-4 py-2 mt-4"
        onClick={async () => {
          await supabase.auth.signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}
