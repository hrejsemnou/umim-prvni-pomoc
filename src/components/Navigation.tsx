"use client";
import NavigationItem from "@/components/NavigationItem";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const LeftNavItems = [
    {
      slug: "/",
      label: "UmímPrvníPomoc.cz",
    },
  ];
  const RightNavItems = [
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

  return (
    <div className="flex justify-between bg-foreground text-background py-6 px-12">
      <div className="flex gap-8 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
        </Link>
        {LeftNavItems.map((item) => (
          <NavigationItem key={item.slug} slug={item.slug} label={item.label} />
        ))}
      </div>
      <div className="flex gap-8 items-center">
        {RightNavItems.map((item) => (
          <NavigationItem key={item.slug} slug={item.slug} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
