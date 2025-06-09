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
      className={clsx(
        "hover:bg-red-600 font-bold px-6 py-2 rounded-[20px] w-screen text-center md:w-auto",
        pathName === slug && "bg-red-600",
        slug === "/podporte-nas" && "bg-blue-600",
      )}
      href={slug}
    >
      {label}
    </Link>
  );
};

export default NavigationItem;
