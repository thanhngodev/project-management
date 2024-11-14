import { Briefcase, Home, Search, Settings, User, Users } from "lucide-react";
import { ROUTE } from "./route.const";

export const MENU_NAV_CONFIG = {
  HOME: { label: "Home", href: ROUTE.HOME, icon: Home },
  TIMELINE: { label: "Timeline", href: ROUTE.TIMELINE, icon: Briefcase },
  SEARCH: { label: "Search", href: ROUTE.SEARCH, icon: Search },
  SETTINGS: { label: "Settings", href: ROUTE.SETTINGS, icon: Settings },
  USERS: { label: "Users", href: ROUTE.USERS, icon: User },
  TEAMS: { label: "Teams", href: ROUTE.TEAMS, icon: Users },
};

export const MENU_NAV = [
  MENU_NAV_CONFIG.HOME,
  MENU_NAV_CONFIG.TIMELINE,
  MENU_NAV_CONFIG.SEARCH,
  MENU_NAV_CONFIG.SETTINGS,
  MENU_NAV_CONFIG.USERS,
  MENU_NAV_CONFIG.TEAMS,
];
