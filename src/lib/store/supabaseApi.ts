import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/store/supabase";
import { EducationProvider } from "@/app/types/EducationProvider";

export const supabaseApi = createApi({
  reducerPath: "supabaseApi",
  baseQuery: fakeBaseQuery(), // since we're using Supabase client directly
  endpoints: (builder) => ({
    getEducationProviders: builder.query<EducationProvider[], void>({
      async queryFn() {
        const { data, error } = await supabase
          .from("education_providers")
          .select("*");
        if (error) return { error };
        return { data: data as EducationProvider[] };
      },
    }),
    addEducationProvider: builder.mutation<
      EducationProvider,
      EducationProvider
    >({
      async queryFn(body) {
        const { data, error } = await supabase
          .from("education_providers")
          .insert([body])
          .select();
        if (error) return { error };
        return { data: data![0] as EducationProvider };
      },
    }),
  }),
});

export const {
  useGetEducationProvidersQuery,
  useAddEducationProviderMutation,
} = supabaseApi;
