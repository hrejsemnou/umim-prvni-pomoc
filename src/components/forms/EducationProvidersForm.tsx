"use client";
import { useAddEducationProviderMutation } from "@/lib/store/supabaseApi";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { CombinedFormSchema } from "@/components/forms/FormSchemas";
import { Input } from "@/components/forms/Input";

type FormData = z.infer<typeof CombinedFormSchema>;

const EducationProvidersForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(CombinedFormSchema),
    mode: "all",
  });

  const [addEducationProvider] = useAddEducationProviderMutation();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const combinedData = {
      base: { name: data.name, subname: data.subname, active: false },
      accessibility: {
        no_barriers: data.no_barriers,
        hearing_impaired: data.hearing_impaired,
        sight_impaired: data.sight_impaired,
      },
      contact: {
        email: data.email,
        facebook: data.facebook,
        instagram: data.instagram,
        phone: data.phone,
        website: data.websiteUrl,
      },
      focus: {
        mountains: data.mountains,
        infants: data.infants,
        waterside: data.waterside,
        paramedics: data.paramedics,
      },
      form: {
        live: data.live,
        online: data.online,
      },
      locations: {
        everywhere: data.everywhere,
        region: data.region,
      },
      publicity: {
        public: data.public,
        private: data.private,
      },
      targets: {
        children: data.children,
        adults: data.adults,
        lectors: data.lectors,
        professionals: data.professionals,
        elderly: data.elderly,
        teams_driving_schools: data.teams_driving_schools,
        teams_schools: data.teams_schools,
        teams_companies: data.teams_companies,
      },
      terrains: {
        masking: data.masking,
        theory: data.theory,
        vr: data.vr,
      },
      types: {
        game: data.game,
        book: data.book,
        course: data.course,
        podcast: data.podcast,
        event: data.event,
        website: data.website,
      },
    };
    try {
      await addEducationProvider(combinedData).unwrap();
    } catch (err) {
      console.error("Failed to create provider:", err);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 px-6 py-6 sm:border-[1px] sm:rounded-2xl"
      >
        <div>
          <h2 className="text-lg font-bold text-left mb-4">Základní info</h2>
          <Input
            name="name"
            type="text"
            placeholder="Umím první pomoc"
            label="Název*"
          />
          <Input
            name="subname"
            type="text"
            placeholder="První český vyhledávač vzdělání v první pomoci"
            label="Podnázev"
          />
        </div>

        <hr className="mb-6 mt-6" />

        <div>
          <h2 className="text-lg font-bold text-left mb-4">Přístupnost</h2>
          <div className="flex gap-4 flex-wrap">
            <Input name="no_barriers" type="checkbox" label="Bez bariér" />
            <Input name="hearing_impaired" type="checkbox" label="Neslyšící" />
            <Input name="sight_impaired" type="checkbox" label="Nevidomí" />
          </div>
        </div>

        <hr className="mb-6 mt-6" />

        <div>
          <h2 className="text-lg font-bold text-left mb-4">Kontaktní údaje</h2>
          <Input name="email" type="email" label="Email*" />
          <Input name="facebook" type="text" label="Facebook" />
          <Input name="instagram" type="text" label="Instagram" />
          <Input name="phone" type="text" label="Telefon" />
          <Input name="websiteUrl" type="text" label="Web" />
        </div>

        <hr className="mb-6 mt-6" />

        <div>
          <h2 className="text-lg font-bold text-left mb-4">Zaměření</h2>
          <div className="flex gap-4 flex-wrap">
            <Input name="mountains" type="checkbox" label="Hory" />
            <Input name="infants" type="checkbox" label="Děti" />
            <Input name="waterside" type="checkbox" label="Voda" />
            <Input name="paramedics" type="checkbox" label="Záchranáři" />
          </div>
        </div>

        <hr className="mb-6 mt-6" />

        <div>
          <h2 className="text-lg font-bold text-left mb-4">Forma</h2>
          <div className="flex gap-4 flex-wrap">
            <Input name="live" type="checkbox" label="Živě" />
            <Input name="online" type="checkbox" label="Online" />
          </div>
        </div>

        <hr className="mb-6 mt-6" />

        <div>
          <h2 className="text-lg font-bold text-left mb-4">Lokalita</h2>
          <Input name="everywhere" type="checkbox" label="Všude" />
          <Input name="region" type="text" label="Regiony" />
        </div>

        <hr className="mb-6 mt-6" />

        <div>
          <h2 className="text-lg font-bold text-left mb-4">Soukromí</h2>
          <div className="flex gap-4 flex-wrap">
            <Input name="public" type="checkbox" label="Veřejné" />
            <Input name="private" type="checkbox" label="Soukromé" />
          </div>
        </div>

        <hr className="mb-6 mt-6" />

        <div>
          <h2 className="text-lg font-bold text-left mb-4">Cílová skupina</h2>
          <div className="flex gap-4 flex-wrap">
            <Input name="children" type="checkbox" label="Děti" />
            <Input name="adults" type="checkbox" label="Dospělí" />
            <Input name="lectors" type="checkbox" label="Lektoři" />
            <Input name="professionals" type="checkbox" label="Odborníci" />
            <Input name="elderly" type="checkbox" label="Senioři" />
            <Input
              name="teams_driving_schools"
              type="checkbox"
              label="Autoškoly"
            />
            <Input name="teams_schools" type="checkbox" label="Školy" />
            <Input name="teams_companies" type="checkbox" label="Firmy" />
          </div>
        </div>

        <hr className="mb-6 mt-6" />

        <div>
          <h2 className="text-lg font-bold text-left mb-4">Terénnost</h2>
          <div className="flex gap-4 flex-wrap">
            <Input name="masking" type="checkbox" label="Maskování" />
            <Input name="theory" type="checkbox" label="Teorie" />
            <Input name="vr" type="checkbox" label="VR" />
          </div>
        </div>

        <hr className="mb-6 mt-6" />

        <div>
          <h2 className="text-lg font-bold text-left mb-4">Druh vzdělání</h2>
          <div className="flex gap-4 flex-wrap">
            <Input name="game" type="checkbox" label="Hra" />
            <Input name="book" type="checkbox" label="Kniha" />
            <Input name="course" type="checkbox" label="Kurz" />
            <Input name="podcast" type="checkbox" label="Podcast" />
            <Input name="event" type="checkbox" label="Událost" />
            <Input name="website" type="checkbox" label="Web" />
          </div>
        </div>

        <hr className="mb-6 mt-6" />

        <button
          type="submit"
          className="text-background font-bold color-foreground self-center bg-primary rounded-[8px] py-2 px-4 disabled:opacity-50"
        >
          Odeslat
        </button>
      </form>
    </FormProvider>
  );
};

export default EducationProvidersForm;
