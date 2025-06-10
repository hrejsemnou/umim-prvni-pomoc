import routes from "@/components/navigation/routes";
import NavigationItem from "./NavigationItem";
import Image from "next/image";

const SideBar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    isOpen && (
      <div className="flex flex-col h-full top-10 w-full absolute z-10 bg-background text-foreground gap-4 items-center justify-center md:hidden">
        <NavigationItem toggle={toggle} slug={"/"} label="Domů" />
        {routes.map((item) => (
          <NavigationItem
            toggle={toggle}
            key={item.slug}
            slug={item.slug}
            label={item.label}
          />
        ))}
        <button onClick={toggle}>
          <Image src="/icons/menu.svg" alt="menu" width={30} height={30} />
        </button>
      </div>
    )
  );
};

export default SideBar;
