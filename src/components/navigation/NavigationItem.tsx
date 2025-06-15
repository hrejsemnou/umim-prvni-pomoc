"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = {
  slug: string;
  label: string;
  toggle: () => void;
};

const NavigationItem = ({ slug, label, toggle }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === slug;
  const isPodporte = slug === "/podporte-nas";

  if (isPodporte) {
    return (
      <Link
        onClick={toggle}
        href={slug}
        className="group relative w-6/12 overflow-hidden rounded-[20px] bg-accent text-center md:w-auto"
      >
        {/* Label */}
        <span className="relative z-10 block px-6 py-2 font-bold text-background transition-colors duration-300">
          {label}
        </span>

        {/* Animated background fill */}
        <span
          className={clsx(
            "absolute inset-0 left-0 z-0 h-full bg-primary transition-all duration-500 ease-out",
            isActive ? "w-full" : "w-0 group-hover:w-full",
          )}
          style={{ borderRadius: "20px" }}
        />
      </Link>
    );
  }

  return (
    <Link
      onClick={toggle}
      href={slug}
      className="group w-6/12 text-center md:w-auto"
    >
      <span
        className={clsx(
          "font-bold px-6 py-2 rounded-[20px] transition-colors",
          isActive
            ? "bg-primary text-background"
            : "text-foreground hover:bg-primary hover:text-background",
        )}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavigationItem;
