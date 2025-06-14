export default function Home() {
  return (
    <div className="text-center max-h-dvh md:gap-8 gap-4 py-4 flex flex-col">
      <h1 className="text-5xl font-bold mb-6">
        První český vyhledávač vzdělávání v&nbsp;první pomoci
      </h1>
      <button className="bg-accent text-white text-3xl rounded-4xl max-w-md self-center px-8 py-4 font-bold">
        Chci umět pomoci
      </button>
      <p>
        Kurzy první pomoci živě, online, knihy a další publikace, hry,
        vzdělávací programy a weby – vše na jednom místě. Aby každý z nás věděl,
        co dělat, když jde do tuhýho.
      </p>
    </div>
  );
}
