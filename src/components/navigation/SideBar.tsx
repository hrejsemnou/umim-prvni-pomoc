import routes from "@/components/navigation/routes";
import NavigationItem from "@/components/navigation/NavigationItem";

const SideBar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    isOpen && (
      <div className="flex flex-col pt-20 h-dvh w-dvw fixed z-10 bg-background text-foreground gap-4 items-center justify-center md:hidden">
        {routes.map((item) => (
          <NavigationItem
            toggle={toggle}
            key={item.slug}
            slug={item.slug}
            label={item.label}
          />
        ))}
      </div>
    )
  );
};

export default SideBar;
