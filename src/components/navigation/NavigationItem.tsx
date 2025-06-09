"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

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
      className={classNames("hover:underline w-screen text-center md:w-auto", {
        underline: pathName === slug,
      })}
      href={slug}
    >
      {label}
    </Link>
  );
};

export default NavigationItem;
