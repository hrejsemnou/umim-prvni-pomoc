export default function Search() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-center bg-background-grey px-12 min-h-dvh md:gap-8 gap-4 py-6 flex flex-col justify-center items-center w-full">
        <h1 className="text-5xl font-bold mb-6 text-grey">
          Vyhledávač vzdělávání je ještě ve&nbsp;výrobě...
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-2xl">
            Chcete nám s&nbsp;ním{" "}
            <span className="font-bold text-accent">pomoci</span>?
          </p>
          <p className="text-2xl">
            Dejte nám vědět na některém z našich kanálů
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xl font-bold">Máš jen jeden, z.ú.</p>
          <a
            target="_blank"
            href="https://masjenjeden.cz"
            className="hover:text-primary text-xl"
          >
            www.masjenjeden.cz
          </a>
          <a
            target="_blank"
            href="mailto:zivot@masjenjeden.cz"
            className="hover:text-primary text-xl"
          >
            zivot@masjenjeden.cz
          </a>
        </div>
      </div>
    </div>
  );
}
