import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/store/supabase";
import {
  EducationProviderSelectType,
  EducationProviderInsertType,
} from "@/features/educationProviders/types/EducationProvider";

export const supabaseApi = createApi({
  reducerPath: "supabaseApi",
  baseQuery: fakeBaseQuery(), // since we're using Supabase client directly
  endpoints: (build) => ({
    getEducationProviders: build.query<EducationProviderSelectType[], void>({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("education_providers")
          .select(
            "*, \
            education_provider_accessibility(*), \
            education_provider_contact(*), \
            education_provider_focus(*), \
            education_provider_form(*), \
            education_provider_locations(*), \
            education_provider_publicity(*), \
            education_provider_targets(*), \
            education_provider_terrains(*), \
            education_provider_types(*)",
          );
        if (error) {
          return { error };
        }
        return { data };
      },
    }),
    addEducationProvider: build.mutation<void, EducationProviderInsertType>({
      queryFn: async (body) => {
        const { data, error } = await supabase.rpc(
          "create_full_education_provider",
          {
            base: {
              name: body.base.name,
              subname: body.base.subname,
              active: body.base.active,
              created_at: body.base.created_at,
            },
            accessibility: body.accessibility,
            contact: body.contact,
            focus: body.focus,
            form: body.form,
            locations: body.locations,
            publicity: body.publicity,
            targets: body.targets,
            terrains: body.terrains,
            types: body.types,
          },
        );

        if (error) {
          return {
            error: {
              name: "InsertError",
              message: error.message,
            },
          };
        }

        return { data };
      },
    }),
  }),
});

export const {
  useGetEducationProvidersQuery,
  useAddEducationProviderMutation,
} = supabaseApi;
