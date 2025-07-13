import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-center bg-background-grey px-12 min-h-dvh md:gap-8 gap-4 py-6 flex flex-col justify-center items-center w-full">
        <h1 className="text-5xl font-bold mb-6 text-grey">Náš tým</h1>
        <p className="text-lg">
          Ve dvou se to lépe táhne. A stále hledáme další parťáky. Přidáte se k
          nám?
        </p>

        <div className="flex gap-4 px-4 justify-center">
          <div className="flex gap-3 flex-col justify-center items-center">
            <Image
              style={{ filter: "grayscale()" }}
              src="/ellen.png"
              alt="ellen-c"
              width={240}
              height={240}
            ></Image>
            <p className="font-bold text-profile-text text-xl">Ellen Činková</p>
            <p>zakladatelka, ředitelka, lékařka a máma</p>
          </div>
          <div className="flex gap-3 flex-col justify-center items-center">
            <Image
              style={{ filter: "grayscale()" }}
              src="/lukas.png"
              alt="lukas-s"
              width={240}
              height={240}
            ></Image>
            <p className="font-bold text-profile-text text-xl">Lukáš Sahula</p>
            <p>spoluzakladatel, programátor, milovník kari</p>
          </div>
        </div>
      </div>
    </div>
  );
}
