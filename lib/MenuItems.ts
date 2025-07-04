import {
  Home,
  Receipt,
  RotateCcw,
  FilePlus,
  BarChart,
  ChartLine,
  ChartPie,
  LucideIcon,
  List,
  PackagePlus,
  CircleQuestionMark,
  CogIcon,
} from "lucide-react";

export type MenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export const dashboard: MenuItem[] = [
  {
    title: "Overview",
    url: "#",
    icon: Home,
  },
];

export const orders: MenuItem[] = [
  {
    title: "All Orders",
    url: "#",
    icon: Receipt,
  },
  {
    title: "Add New Order",
    url: "#",
    icon: FilePlus,
  },
  {
    title: "Returns",
    url: "#",
    icon: RotateCcw,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart,
  },
];

export const products: MenuItem[] = [
  {
    title: "Product List",
    url: "#",
    icon: List,
  },
  {
    title: "Add New Product",
    url: "#",
    icon: PackagePlus,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartPie,
  },
];

export const customers: MenuItem[] = [
  {
    title: "Customer List",
    url: "#",
    icon: List,
  },
  {
    title: "Add New Customer",
    url: "#",
    icon: PackagePlus,
  },
  {
    title: "Stats",
    url: "#",
    icon: ChartLine,
  },
];

export const utilities: MenuItem[] = [
  {
    title: "Help",
    url: "#",
    icon: CircleQuestionMark,
  },
  {
    title: "Settings",
    url: "#",
    icon: CogIcon,
  },
];
