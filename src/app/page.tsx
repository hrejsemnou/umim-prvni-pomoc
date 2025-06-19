import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="px-12 text-center h-dvh gap-3 py-10 flex flex-col justify-center items-center w-full z-[1]">
        <p className="text-background md:text-lg text-sm">
          Aby každý věděl, co dělat, když jde do tuhýho
        </p>
        <h1 className="md:text-4xl text-2xl font-bold text-background md:max-w-6/12">
          Tvoříme první český vyhledávač vzdělávání v&nbsp;první pomoci
        </h1>
        <Link
          href="/vyhledavac"
          className="mt-4 mb-4 bg-primary text-background font-bold text-lg text-nowrap px-8 py-4 rounded-4xl"
        >
          Umět zachránit život
        </Link>
        <p className="md:text-lg text-sm text-background">
          Kurzy první pomoci živě, online, knihy a další publikace, hry,
          vzdělávací programy a události - <strong>vše na jednom místě</strong>.
        </p>
      </div>
      <div className="h-dvh w-full overflow-hidden absolute z-0">
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
