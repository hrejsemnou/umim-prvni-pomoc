import Image from "next/image";

export const Tooltip = ({ content }: { content: string }) => {
  return (
    <div className="group flex relative">
      <Image src="/icons/info.svg" width="20" height="20" alt="info-icon" />

      <div className="absolute left-5 bottom-5 w-100 hidden bg-background-grey p-4 rounded-[8px] group-hover:block">
        {content}
      </div>
    </div>
  );
};
