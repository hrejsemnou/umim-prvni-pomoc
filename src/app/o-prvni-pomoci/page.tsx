export default function AboutFirstAid() {
  return (
    <div className="px-12 text-center max-h-dvh md:gap-8 gap-4 py-4 flex flex-col">
      <h1 className="text-6xl font-bold mb-6 text-foreground">
        Ještě to tu chystáme...
      </h1>
      <div className="flex flex-col gap-2">
        <p className="text-2xl">
          Chcete být u vzniku <strong>s&nbsp;námi</strong>?
        </p>
        <p className="text-2xl">Dejte nám vědět na některém z našich kanálů…</p>
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
  );
}
