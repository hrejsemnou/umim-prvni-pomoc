import { FormData } from "@/features/educationProviders/components/FormSchemas";

export const transformData = (data: FormData) => {
  return {
    base: { name: data.name, subname: data.subname, active: false },
    contact: {
      email: data.email,
      facebook: data.facebook,
      instagram: data.instagram,
      phone: data.phone,
      website: data.websiteUrl,
    },
    focus: {
      children: data.infants,
      elderly: data.elderly,
      outdoor: data.outdoor,
      waterside: data.waterside,
      paramedics: data.paramedics,
    },
    locations: {
      everywhere: data.everywhere ?? false,
      region: data.region ?? "",
    },
    privacy: {
      public: data.public ?? false,
      private: data.private ?? false,
    },
    plurality: {
      individuals: data.individuals ?? false,
      groups: data.groups ?? false,
    },
    targets: {
      children: data.pupils,
      adults: data.adults,
      schools: data.schools,
      lectors: data.lectors,
      professionals: data.professionals,
      other: data.otherTargets,
    },
    methods: {
      masking: data.masking ?? false,
      vr: data.vr ?? false,
    },
    types: {
      course_live: data.courseLive,
      course_online: data.courseOnline,
      literature: data.literature,
      application: data.application,
      podcast: data.podcast,
      event: data.event,
      other: data.otherTypes,
    },
    certifications: {
      zza_msmt: data.zza_msmt,
      dvpp_msmt: data.dvpp_msmt,
      mpsv: data.mpsv,
      mzcr: data.mzcr,
    },
  };
};
