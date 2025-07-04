import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/store/supabase";
import { EducationProvider } from "@/app/types/EducationProvider";

export const supabaseApi = createApi({
  reducerPath: "supabaseApi",
  baseQuery: fakeBaseQuery(), // since we're using Supabase client directly
  endpoints: (build) => ({
    getEducationProviders: build.query<EducationProvider[], void>({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("education_providers")
          .select();
        if (error) {
          return { error };
        }
        return { data };
      },
    }),
    addEducationProvider: build.mutation({
      queryFn: async (body) => {
        const { data, error } = await supabase
          .from("education_providers")
          .insert([body])
          .select();
        if (error) {
          return { error };
        }
        return { data: data![0] };
      },
    }),
  }),
});

export const {
  useGetEducationProvidersQuery,
  useAddEducationProviderMutation,
} = supabaseApi;
