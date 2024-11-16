import React, { useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react";
import SidebarLink from "../SidebarLink";

const ITEM_HEIGHT = 42;
const MAX_VISIBLE_ITEMS = 5;

interface SidebarLinkSubProps {
  toggleShow: () => void;
  isOpen: boolean;
  items: any[];
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

  const visibleHeight = Math.min(items.length, MAX_VISIBLE_ITEMS) * ITEM_HEIGHT;

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
        style={{
          height: isOpen ? `${visibleHeight}px` : "0px",
        }}
        className={`transition-height overflow-hidden duration-[320ms] ease-in-out ${
          isOpen && items.length > MAX_VISIBLE_ITEMS ? "overflow-y-auto" : ""
        }`}
      >
        <div
          style={{
            maxHeight: `${visibleHeight}px`,
          }}
          className="custom-scrollbar"
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
    </div>
  );
};

export default SidebarLinkSub;
