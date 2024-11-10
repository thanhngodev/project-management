"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux/redux";
import { SIDEBAR_CLASS_NAMES } from "@/constants/common.const";
// import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
// import { useGetProjectsQuery } from "@/state/api";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Home,
  Layers3,
  LockIcon,
  LucideIcon,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import SidebarLink from "../SidebarLink";
import { MENU_NAV } from "@/constants/menus.const";
import SidebarLinkSub from "../SidebarLinkSub";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  const menuNav = MENU_NAV;
  //   const { data: projects } = useGetProjectsQuery();

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const sidebarClassNames = `${SIDEBAR_CLASS_NAMES}${isSidebarCollapsed ? "w-0 -translate-x-full opacity-0" : "w-64 translate-x-0"}`;

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            TaskFlowHub
          </div>
          {isSidebarCollapsed ? null : (
            <button
              className="py-3"
              onClick={() => {
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
              }}
            >
              <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}
        </div>
        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
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
          {menuNav.map((menuNavItem, idx: number) => (
            <SidebarLink
              key={idx}
              icon={menuNavItem.icon}
              label={menuNavItem.label}
              href={menuNavItem.href}
            />
          ))}
        </nav>
        {/* PROJECTS LINKS */}
        <SidebarLinkSub
          toggleShow={() => setShowProjects((prev) => !prev)}
          isOpen={showProjects}
          items={[
            { label: "Urgent", href: "/project/urgent", icon: AlertCircle },
            { label: "High", href: "/project/high", icon: ShieldAlert },
            { label: "Medium", href: "/project/medium", icon: AlertTriangle },
            { label: "Low", href: "/project/low", icon: AlertOctagon },
            { label: "Backlog", href: "/project/backlog", icon: Layers3 },
          ]}
          label="Projects"
        />
        {/* {showProjects &&
          projects?.map((project) => (
            <SidebarLink
              key={project.id}
              icon={Briefcase}
              label={project.name}
              href={`/projects/${project.id}`}
            />
          ))} */}
        {/* PRIORITIES LINKS */}
        <SidebarLinkSub
          toggleShow={() => setShowPriority((prev) => !prev)}
          isOpen={showPriority}
          items={[
            { label: "Urgent", href: "/priority/urgent", icon: AlertCircle },
            { label: "High", href: "/priority/high", icon: ShieldAlert },
            { label: "Medium", href: "/priority/medium", icon: AlertTriangle },
            { label: "Low", href: "/priority/low", icon: AlertOctagon },
            { label: "Backlog", href: "/priority/backlog", icon: Layers3 },
          ]}
          label="Priority"
        />
      </div>
    </div>
  );
};

export default Sidebar;
