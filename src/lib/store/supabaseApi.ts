import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/store/supabase";
import { EducationProvider } from "@/app/types/EducationProvider";

export const supabaseApi = createApi({
  reducerPath: "supabaseApi",
  baseQuery: fakeBaseQuery(), // since we're using Supabase client directly
  endpoints: (builder) => ({
    getPendingEducationProviders: builder.query<EducationProvider[], void>({
      async queryFn() {
        const { data, error } = await supabase
          .from("education_providers_pending")
          .select("*");
        if (error) return { error };
        return { data: data as EducationProvider[] };
      },
    }),
    getActiveEducationProviders: builder.query<EducationProvider[], void>({
      async queryFn() {
        const { data, error } = await supabase
          .from("education_providers_active")
          .select("*");
        if (error) return { error };
        return { data: data as EducationProvider[] };
      },
    }),
    addPendingEducationProvider: builder.mutation<
      EducationProvider,
      EducationProvider
    >({
      async queryFn(body) {
        const { data, error } = await supabase
          .from("education_providers_pending")
          .insert([body])
          .select();
        if (error) return { error };
        return { data: data![0] as EducationProvider };
      },
    }),
    addActiveEducationProvider: builder.mutation<
      EducationProvider,
      EducationProvider
    >({
      async queryFn(body) {
        const { data, error } = await supabase
          .from("education_providers_active")
          .insert([body])
          .select();
        if (error) return { error };
        return { data: data![0] as EducationProvider };
      },
    }),
  }),
});

export const {
  useGetActiveEducationProvidersQuery,
  useAddActiveEducationProviderMutation,
  useGetPendingEducationProvidersQuery,
  useAddPendingEducationProviderMutation,
} = supabaseApi;
