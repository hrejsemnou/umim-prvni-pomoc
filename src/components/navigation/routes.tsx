interface Route {
  slug: string;
  label: string;
}

const routes: Route[] = [
  {
    slug: "/vyhledavac",
    label: "Vyhledávač",
  },
  {
    slug: "/o-prvni-pomoci",
    label: "O první pomoci",
  },
  {
    slug: "/o-nas",
    label: "O nás",
  },
  {
    slug: "/podporte-nas",
    label: "Podpořte nás",
  },
];

export default routes;
