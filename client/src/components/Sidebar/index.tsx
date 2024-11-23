"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux/redux";
import { MENU_NAV } from "@/constants/menus.const";
import { PUBLIC_URL, setIsSidebarCollapsed } from "@/state";
import { useGetProjectsQuery } from "@/state/api";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  BellRing,
  Briefcase,
  Clock,
  Info,
  Layers3,
  List,
  LockIcon,
  ShieldAlert,
  X,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import SidebarLink from "../SidebarLink";
import SidebarLinkSub from "../SidebarLinkSub";

const priorityLinks = [
  { label: "Urgent", href: "/priority/urgent", icon: AlertTriangle },
  { label: "High", href: "/priority/high", icon: BellRing },
  { label: "Medium", href: "/priority/medium", icon: Info },
  { label: "Low", href: "/priority/low", icon: Clock },
  { label: "Backlog", href: "/priority/backlog", icon: List },
];

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const { data: projects, isError } = useGetProjectsQuery();

  // Sidebar classes optimized with condition
  const sidebarClassNames = useMemo(
    () =>
      `fixed flex flex-col h-full justify-between shadow-xl transition-all duration-300 z-40 dark:bg-black overflow-y-auto bg-white ${
        isSidebarCollapsed
          ? "w-0 -translate-x-full opacity-0"
          : "w-64 translate-x-0"
      }`,
    [isSidebarCollapsed],
  );

  // Memoized project links
  const projectLinks = useMemo(
    () =>
      projects
        ? projects.map((project) => ({
            icon: Briefcase,
            label: project.name,
            href: `/projects/${project.id}`,
          }))
        : [],
    [projects],
  );

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            TaskFlowHub
          </div>
          <button
            className="py-3"
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
          </button>
        </div>

        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src={`${PUBLIC_URL}/logo.png`} alt="Logo" width={40} height={40} />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              EDROH TEAM
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
        {/* NAVBAR LINKS */}
        <nav className="z-10 w-full">
          {MENU_NAV.map((menuNavItem, idx) => (
            <SidebarLink
              key={idx}
              icon={menuNavItem.icon}
              label={menuNavItem.label}
              href={menuNavItem.href}
            />
          ))}
        </nav>
        {/* PROJECTS LINKS */}
        {projectLinks && projectLinks.length > 0 && (
          <SidebarLinkSub
            toggleShow={() => setShowProjects((prev) => !prev)}
            isOpen={showProjects}
            items={projectLinks}
            label="Projects"
          />
        )}

        {/* PRIORITIES LINKS */}
        <SidebarLinkSub
          toggleShow={() => setShowPriority((prev) => !prev)}
          isOpen={showPriority}
          items={priorityLinks}
          label="Priority"
        />
      </div>

      {/* Error Handling for Projects */}
      {isError && (
        <div className="px-6 py-3 text-sm text-red-500">
          Failed to load projects. Please try again.
        </div>
      )}
    </div>
  );
};

export default Sidebar;
