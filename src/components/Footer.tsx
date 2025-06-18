import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-between bg-white text-foreground py-8 px-12">
      <div className="flex flex-col gap-2">
        <div>
          <p className="font-bold">
            <a className="text-accent" href="masjenjeden.cz">
              Máš jen jeden, z.ú.
            </a>
          </p>
          <p>IČO: 23302607</p>
        </div>
        <div>
          <p>Křižanská 1171/19</p>
          <p>182 00, Praha 8</p>
        </div>
        <p>
          <a
            className="font-bold text-primary"
            href="mailto:zivot@masjenjeden.cz"
            target="_blank"
          >
            zivot@masjenjeden.cz
          </a>
        </p>
      </div>

      <div className="flex justify-center items-center flex-col gap-8">
        <div className="flex justify-center items-center gap-4">
          <a target="_blank" href="https://www.instagram.com/umimprvnipomoc/">
            <Image
              src="/icons/instagram.svg"
              width={40}
              height={40}
              alt="Instagram link"
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61577768481953"
          >
            <Image
              src="/icons/facebook.svg"
              width={40}
              height={40}
              alt="Facebook link"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/mas-jen-jeden/"
          >
            <Image
              src="/icons/linkedin.svg"
              width={40}
              height={40}
              alt="Linkedin link"
            />
          </a>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <a
            target="_blank"
            href="files/GDPR.pdf"
            className="font-bold text-xs text-foreground hover:text-primary"
          >
            Zpracování dat
          </a>
          <a
            target="_blank"
            href="https://www.masjenjeden.cz"
            className="font-bold text-xs text-foreground hover:text-primary"
          >
            Naše organizace
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <a target="_blank" href="https://masjenjeden.cz">
          <Image
            src="/logo_ustav.png"
            width={120}
            height={120}
            alt="Máš jen jeden logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
