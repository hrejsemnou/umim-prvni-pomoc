import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-center bg-background-white px-12 min-h-[75dvh] md:gap-8 gap-4 py-6 flex flex-col justify-center items-center md:mt-0 mt-[6rem]">
        <h1 className="text-5xl font-bold mb-6 text-grey">
          První český vyhledávač vzdělávání v&nbsp;první pomoci
        </h1>

        <p className="font-bold text-xl">
          Kurzy první pomoci živě, online, knihy a další publikace, hry,
          vzdělávací programy a události – vše na jednom místě. Aby každý z nás
          věděl, co dělat, když{" "}
          <span className="text-accent">jde do tuhýho</span>.
        </p>
      </div>
      <div className="text-center w-screen px-12 bg-background-grey min-h-[50dvh] md:gap-8 gap-4 py-6 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-primary">
          Jsme Umím první pomoc
        </h2>
        <p>
          Tvoříme jedno místo, kde si každý najde vzdělávání v první pomoci
          podle svých potřeb.
        </p>
        <div className="flex justify-between flex-col sm:flex-row gap-12 sm:gap-0">
          <div className="flex flex-col gap-2 items-center grow-0 shrink-0 basis-[33%]">
            <div className="rounded-[50%] overflow-hidden">
              <Image
                alt="first-aid-course"
                src="/images/homepage_1.jpg"
                width={200}
                height={200}
              />
            </div>
            <h3 className="text-primary text-xl font-bold">Veškeré možnosti</h3>
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
                width={200}
                height={200}
              />
            </div>
            <h3 className="text-primary text-xl font-bold">
              Po celé ČR nebo online
            </h3>
            <p className="text-xs">Živě, online, veřejně, soukromě.</p>
          </div>
          <div className="flex flex-col gap-2 items-center grow-0 shrink-0 basis-[33%]">
            <div className="rounded-[50%] overflow-hidden">
              <Image
                alt="family"
                src="/images/homepage_3.jpg"
                width={200}
                height={200}
              />
            </div>
            <h3 className="text-primary text-xl font-bold">Pro každého</h3>
            <p className="text-xs">
              Pro mámy, táty, tety, strejdy, dědy, babičky, děti, jednotlivce,
              týmy, laiky i odborníky
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
