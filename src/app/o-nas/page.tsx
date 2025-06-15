import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="text-center md:gap-8 gap-4 py-12 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">O nás</h1>
      <p>
        Jmenuju se Ellen, jsem vzděláním lékařka, která chtěla i na rodičáku
        dělat něco, co má skutečný dopad. Jelikož sama učím první pomoc, často
        vysvětluji, jak důležitá je{" "}
        <strong>prevence a vzdělávání se v&nbsp;první pomoci</strong>. Přestože
        dokážu druhé nadchnout, uvědomila jsem si, že v mé snaze popularizovat
        první pomoc chybí něco zásadního. <strong>Jedno místo</strong>, kam mohu
        druhé odkázat, kde by každý <strong>snadno a rychle</strong> našel kurz
        či jiný typ vzdělávání v první pomoci{" "}
        <strong>podle svých potřeb</strong>. A tak se zrodila myšlenka na webový
        vyhledávač vzdělávání právě v první pomoci. A protože vím, že Mám jen
        jeden, neotálela jsem a od stavění hradů z písku jsem začala běhat k
        počítači. Teď se vyhledávač ještě peče, ale až bude na světě, bude
        místem, kde si každý přijde na to svoje. Místem, kde
        <br />
        <br />
        <strong>Karel</strong>, který jede s dětmi na tábor,{" "}
        <strong>najde</strong> kurz s certifikátem zdravotníka zotavovacích
        akcí,
        <br />
        <strong>Marie</strong>, ředitelka autoškoly, <strong>najde</strong>{" "}
        školení první pomoci na míru pro své lektory jízd,
        <br />
        nastávající rodiče najdou kurz, který jim dá jistotu v péči o miminko,
        <br />
        <strong>Jana</strong>, která se chystá o prázdninách pracovat v Itálii,{" "}
        <strong>najde</strong> kurz plavčíka,
        <br />
        <strong>Alois</strong>, ředitel základní školy, <strong>najde</strong>{" "}
        hravý vzdělávací program pro žáky prvního i druhého stupně.
      </p>
      <p>
        <strong>A kde najdete i vy!</strong>
      </p>
      <h2 className="text-2xl mb-4 font-bold text-grey">
        Spojuje nás touha{" "}
        <a
          href="https://masjenjeden.cz"
          className="underline hover:text-primary"
        >
          ten jeden, co máme
        </a>
        , nepromarnit a zpřístupnit první pomoc úplně každému. <br />
        Jednoduše, s pár kliky, díky kterým zachráníte život.
      </h2>
      <div className="text-center mb-4">
        <h3 className="text-xl">
          Jsme <strong>Umím První Pomoc</strong>
        </h3>
        <p>první český vyhledávač vzdělávání v první pomoci</p>
      </div>
      <div className="flex text-left gap-8 justify-between flex-wrap">
        <br />
        <div className="flex-2/5">
          <p>
            Tvoříme jedno místo, kde si každý z nás najde vzdělávání v první
            pomoci podle svých potřeb.
          </p>
          <p>
            Kurzy, online, knihy a další publikace, hry, vzdělávací programy a
            weby. Živě, online, veřejně, soukromě. Pro mámy, táty, tety,
            strejdy, dědy, babičky, děti, jednotlivce i týmy. Aby každý z nás
            věděl, co dělat, když jde do tuhýho.
          </p>
          <p>
            Děláme to pro sebe, pro svou rodinu a blízké i pro ty, které potkáme
            na ulici. Spolu umíme první pomoc. Spolu zachraňujeme životy.
          </p>
        </div>
        <div className="flex-2/5">
          <ul className="list-disc">
            <li>
              <span className="font-bold text-accent">Popularizujeme</span> -
              šíříme povědomí o první pomoci napříč společností od dětí po
              seniory, mezi jednotlivci i týmy, mezi laiky i odborníky
            </li>
            <li>
              <span className="font-bold text-accent">Zpřístupňujeme</span> -
              zlepšujeme dostupnost vzdělávání v první pomoci, propojujeme
              zájemce o kurzy a další s ověřenými poskytovateli
            </li>
            <li>
              <span className="font-bold text-accent">
                Detabuizujeme a demýtizujeme
              </span>{" "}
              - mluvíme o první pomoci nahlas, bez studu, protože i laická
              záchrana života má obrovský smysl
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl font-bold">Náš tým</h2>
      <p>
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
  );
}
