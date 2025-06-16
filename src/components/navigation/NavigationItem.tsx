"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavigationItem = ({
  slug,
  label,
  toggle,
}: {
  slug: string;
  label: string;
  toggle: () => void;
}) => {
  const pathName = usePathname();

  return (
    <Link
      onClick={toggle}
      href={slug}
      className="group w-6/12 text-center md:w-auto"
    >
      <span
        className={clsx(
          "group-hover:bg-primary group-hover:text-background font-bold px-6 py-2 rounded-[20px]",
          pathName === slug && "bg-primary text-background",
          slug === "/podporte-nas" && "bg-accent text-background",
          pathName !== slug && slug !== "/podporte-nas" && "text-foreground",
        )}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavigationItem;
