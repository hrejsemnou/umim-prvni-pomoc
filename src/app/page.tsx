import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-roboto bg-foreground flex flex-col justify-center items-center w-full min-h-screen">
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="logo"
        className="self-start absolute top-8 left-8"
      />
      <div className="px-12 text-center gap-10 py-10 pt-40 flex flex-col justify-center items-center w-full z-[1]">
        <h1 className="md:text-6xl text-4xl font-bold text-background md:max-w-6/12">
          Ještě se to tu peče. Brzy jsme tu pro vás!
        </h1>
        <p className="text-background md:text-xl text-lg">
          Tvoříme první český online vyhledávač{" "}
          <strong>vzdělávání v první pomoci</strong>
        </p>
        <Link
          href="https://masjenjeden.cz/projekty/"
          target="_blank"
          className="bg-accent text-background font-bold text-lg text-nowrap px-8 py-4 rounded-4xl"
        >
          O PROJEKTU
        </Link>
        <div className="flex justify-center items-center gap-4">
          <Link
            target="_blank"
            href="https://www.instagram.com/umimprvnipomoc/"
          >
            <Image
              src="/icons/instagram.svg"
              width={40}
              height={40}
              alt="Instagram link"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61577768481953"
          >
            <Image
              src="/icons/facebook.svg"
              width={40}
              height={40}
              alt="Facebook link"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/mas-jen-jeden/"
          >
            <Image
              src="/icons/linkedin.svg"
              width={40}
              height={40}
              alt="Linkedin link"
            />
          </Link>
        </div>
        <div className="text-background">
          <p>
            <strong>Máš jen jeden, z. ú.</strong>
          </p>
          <Link href="https://www.masjenjeden.cz">www.masjenjeden.cz</Link>
        </div>
      </div>
    </div>
  );
}
