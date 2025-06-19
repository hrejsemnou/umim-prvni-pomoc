export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-justify md:text-center bg-background-grey px-12 min-h-dvh md:gap-8 gap-4 py-10 flex flex-col justify-center items-center w-full">
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
    </div>
  );
}
