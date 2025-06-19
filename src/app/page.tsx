import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-justify md:text-center bg-background-grey px-12 min-h-[50dvh] md:gap-8 gap-4 py-10 flex flex-col justify-center items-center w-full">
        <h1 className="text-5xl font-bold text-grey text-center">
          Umím první pomoc
        </h1>
        <p className="text-3xl text-center font-bold mb-6 text-grey">
          První český vyhledávač vzdělávání v&nbsp;první pomoci
        </p>

        <p className="font-bold text-lg">
          Kurzy první pomoci živě, online, knihy a další publikace, hry,
          vzdělávací programy a události – vše na jednom místě. Aby každý z nás
          věděl, co dělat, když{" "}
          <span className="text-accent">jde do tuhýho</span>.
        </p>
      </div>

      <div className="text-justify md:text-center w-screen px-12 bg-background-white min-h-[50dvh] md:gap-8 gap-6 py-10 flex flex-col justify-center items-center">
        <p className="font-bold text-lg ">
          Tvoříme jedno místo, kde si každý najde vzdělávání v první pomoci
          podle svých potřeb.
        </p>
        <div className="flex justify-between flex-col sm:flex-row gap-12 sm:gap-0 w-full">
          <div className="flex flex-col gap-2 items-center grow-0 shrink-0 basis-[33%]">
            <div className="rounded-[50%] overflow-hidden">
              <Image
                alt="first-aid-course"
                src="/images/homepage_1.jpg"
                width={250}
                height={250}
              />
            </div>
            <h3 className="text-foreground text-xl font-bold">
              Veškeré možnosti
            </h3>
            <p className="text-xs">
              Kurzy, knihy a další publikace, hry, vzdělávací programy a
              události.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center grow-0 shrink-0 basis-[33%]">
            <div className="rounded-[50%] overflow-hidden">
              <Image
                alt="map"
                src="/images/homepage_2.jpg"
                width={250}
                height={250}
              />
            </div>
            <h3 className="text-foreground text-xl font-bold">
              Po celé ČR nebo online
            </h3>
            <p className="text-xs">Živě, online, veřejně, soukromě.</p>
          </div>
          <div className="flex flex-col gap-2 items-center grow-0 shrink-0 basis-[33%]">
            <div className="rounded-[50%] overflow-hidden">
              <Image
                alt="family"
                src="/images/homepage_3.jpg"
                width={250}
                height={250}
              />
            </div>
            <h3 className="text-foreground text-xl font-bold">Pro každého</h3>
            <p className="text-xs">
              Pro mámy, táty, tety, strejdy, dědy, babičky, děti, jednotlivce,
              týmy, laiky i odborníky
            </p>
          </div>
        </div>
      </div>

      <div className="text-justify md:text-center w-screen px-12 bg-background-grey min-h-[40dvh] md:gap-8 gap-4 py-10 flex flex-col justify-center items-center">
        <div className="flex justify-between flex-col sm:flex-row gap-12 sm:gap-0 w-full">
          <div className="flex flex-col gap-2 justify-center items-center grow-0 shrink-0 basis-[33%]">
            <Image
              src="/icons/loader.svg"
              alt="popularizace"
              width={80}
              height={80}
            ></Image>
            <h4 className="font-bold text-lg text-foreground text-center">
              Popularizujeme
            </h4>
            <p className="text-sm text-foreground max-w-10/12">
              šíříme povědomí o první pomoci napříč společností od dětí po
              seniory, mezi jednotlivci i týmy, mezi laiky i odborníky
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center grow-0 shrink-0 basis-[33%]">
            <Image
              src="/icons/key.svg"
              alt="zpřístupnění"
              width={80}
              height={80}
            ></Image>
            <h4 className="font-bold text-lg text-foreground text-center">
              Zpřístupňujeme
            </h4>
            <p className="text-sm text-foreground max-w-10/12">
              zlepšujeme dostupnost vzdělávání v první pomoci, propojujeme
              zájemce o kurzy a další s ověřenými poskytovateli
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center grow-0 shrink-0 basis-[33%]">
            <Image
              src="/icons/info.svg"
              alt="detabuizace-demýtizace"
              width={80}
              height={80}
            ></Image>
            <h4 className="font-bold text-lg text-foreground text-center">
              Detabuizujeme a demýtizujeme
            </h4>
            <p className="text-sm text-foreground max-w-10/12">
              mluvíme o první pomoci nahlas, bez studu, protože i laická
              záchrana života má obrovský smysl
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
