import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/supabase/client";
import {
  EducationProviderSelectType,
  EducationProviderInsertType,
} from "@/features/educationProviders/types/EducationProvider";

export const api = createApi({
  reducerPath: "supabaseApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getEducationProviders: build.query<EducationProviderSelectType[], void>({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("education_providers")
          .select(
            "*, \
            education_provider_contact(*), \
            education_provider_focus(*), \
            education_provider_locations(*), \
            education_provider_privacy(*), \
            education_provider_targets(*), \
            education_provider_certifications(*), \
            education_provider_plurality(*), \
            education_provider_methods(*), \
            education_provider_types(*), \
            education_provider_additional_info(*)",
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
              image: body.base.image,
            },
            contact: body.contact,
            focus: body.focus,
            locations: body.locations,
            privacy: body.privacy,
            targets: body.targets,
            plurality: body.plurality,
            certifications: body.certifications,
            methods: body.methods,
            types: body.types,
            additional_info: body.additional_info,
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
} = api;

export const uploadImageAndGetUrl = async (
  file: File,
  providerTempId: string,
) => {
  const uploadResult = await supabase.storage
    .from("education-provider-images")
    .upload(`profile_${providerTempId}`, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (uploadResult.error) throw uploadResult.error;

  const { data: urlData } = supabase.storage
    .from("education-provider-images")
    .getPublicUrl(`profile_${providerTempId}`);

  return urlData.publicUrl;
};
