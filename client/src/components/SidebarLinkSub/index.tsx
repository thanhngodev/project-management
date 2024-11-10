import React, { useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react";
import SidebarLink from "../SidebarLink";

interface SidebarLinkSubProps {
  toggleShow: () => void;
  isOpen: boolean;
  items: { label: string; href: string; icon: LucideIcon }[];
  label: string;
}

const SidebarLinkSub: React.FC<SidebarLinkSubProps> = ({
  toggleShow,
  isOpen,
  items,
  label,
}) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={toggleShow}
        className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
      >
        <span>{label}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-height duration-[320ms] ease-in-out"
      >
        {items.map((item, index) => (
          <SidebarLink
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarLinkSub;
