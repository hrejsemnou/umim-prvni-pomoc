import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="px-12 h-screen md:gap-8 gap-4 py-10 flex flex-col justify-center items-center w-full z-[1]">
        <p className="text-background font-bold">
          Aby každý věděl, co dělat, když jde do tuhýho
        </p>
        <h1 className="text-5xl font-bold text-background text-center md:max-w-6/12">
          Tvoříme první český vyhledávač vzdělávání v&nbsp;první pomoci
        </h1>
        <Link
          href="/vyhledavac"
          className="bg-primary text-background font-bold text-lg text-nowrap px-8 py-4 rounded-4xl"
        >
          Umět zachránit život
        </Link>
        <p className="text-lg text-background">
          Kurzy první pomoci živě, online, knihy a další publikace, hry,
          vzdělávací programy a události - vše na jednom místě.
        </p>
      </div>
      <div className="h-screen w-full overflow-hidden absolute z-0">
        <Image
          src="/images/background.png"
          fill
          alt="homepage-background"
          className="object-cover"
        />
      </div>
    </div>
  );
}
