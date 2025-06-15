import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center max-h-dvh md:gap-8 gap-4 py-4 flex flex-col">
      <h1 className="text-5xl font-bold mb-6 text-grey">
        První český vyhledávač vzdělávání v&nbsp;první pomoci
      </h1>

      <button className="cursor-pointer relative group overflow-hidden text-white text-3xl rounded-4xl max-w-md self-center px-8 py-4 font-bold bg-accent">
        <Link href="/vyhledavac">
          <span className="relative z-5 transition-colors duration-1000">
            Chci umět pomoci
          </span>
          <span className="absolute inset-0 left-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
      </button>

      <p className="font-bold text-xl">
        Kurzy první pomoci živě, online, knihy a další publikace, hry,
        vzdělávací programy a weby – vše na jednom místě. Aby každý z nás věděl,
        co dělat, když jde do tuhýho.
      </p>
    </div>
  );
}
