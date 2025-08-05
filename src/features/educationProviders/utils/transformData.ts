import { FormData } from "@/features/educationProviders/components/FormSchemas";

export const transformData = (data: FormData, imageUrl: string) => {
  return {
    base: {
      name: data.name,
      subname: data.subname,
      active: false,
      image: imageUrl,
    },
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
      other: data.otherFocus,
    },
    locations: {
      jihomoravsky_kraj: data.jihomoravsky_kraj,
      karlovarsky_kraj: data.karlovarsky_kraj,
      kralovehradecky_kraj: data.kralovehradecky_kraj,
      liberecky_kraj: data.liberecky_kraj,
      moravskoslezsky_kraj: data.moravskoslezsky_kraj,
      olomoucky_kraj: data.olomoucky_kraj,
      pardubicky_kraj: data.pardubicky_kraj,
      plzensky_kraj: data.plzensky_kraj,
      praha: data.praha,
      stredocesky_kraj: data.stredocesky_kraj,
      vysocina: data.vysocina,
      zlinsky_kraj: data.zlinsky_kraj,
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
