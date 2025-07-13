import NavigationItem from "@/components/navigation/NavigationItem";
import routes from "@/components/navigation/routes";

import Image from "next/image";
import Link from "next/link";

const NavigationBar = ({
  isSidebarOpen,
  toggle,
}: {
  isSidebarOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <div className="flex justify-between bg-white text-background py-2 px-12 z-20">
      <div className="flex gap-8 items-center">
        <Link href="/">
          <Image src="/header_logo.png" alt="logo" width={50} height={40} />
        </Link>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        {routes.map((item) => (
          <NavigationItem
            toggle={toggle}
            key={item.slug}
            slug={item.slug}
            label={item.label}
          />
        ))}
      </div>
      <button className="md:hidden" onClick={toggle}>
        {isSidebarOpen ? (
          <Image
            src="/icons/close.svg"
            alt="close-menu"
            width={30}
            height={30}
          />
        ) : (
          <Image src="/icons/menu.svg" alt="menu" width={30} height={30} />
        )}
      </button>
    </div>
  );
};

export default NavigationBar;
