import {
  ChartBarBigIcon,
  ChartCandlestickIcon,
  ChartColumnBigIcon,
  ChartLineIcon,
  ClipboardSignatureIcon,
  CogIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
  PackageIcon,
  PaletteIcon,
  ServerCogIcon,
  ShoppingBagIcon,
  UsersIcon,
  UsersRoundIcon,
} from "lucide-react";

const navMenuData = [
  {
    _id: "dashboard", // Unique ID for Dashboard
    title: "Dashboard",
    gradient: "bg-gradient-to-tr from-pink-500 to-yellow-500",
    icon: <LayoutDashboardIcon className="size-8" />,
    href: "/",
  },
  {
    _id: "products", // Unique ID for Products
    title: "Products",
    gradient: "bg-gradient-to-tr from-emerald-400 to-cyan-500",
    icon: <PackageIcon className="size-8" />,
    href: "/products",
  },
  {
    _id: "orders", // Unique ID for Orders
    title: "Orders",
    gradient: "bg-gradient-to-tr from-gray-700 to-indigo-700",
    icon: <ClipboardSignatureIcon className="size-8" />,
    href: "/orders",
  },
  {
    _id: "customers", // Unique ID for Customers
    title: "Customers",
    gradient: "bg-gradient-to-tr from-fuchsia-500 to to-cyan-300",
    icon: <UsersRoundIcon className="size-8" />,
    href: "/customers",
  },
  {
    _id: "users", // Unique ID for Users
    title: "Users",
    gradient: "bg-gradient-to-tr from-rose-700 to-pink-400",
    icon: <UsersIcon className="size-8" />,
    href: "/users",
  },
  {
    _id: "sales", // Unique ID for Sales
    title: "Sales",
    gradient: "bg-gradient-to-tr from-gray-400 to-blue-300",
    icon: <ChartLineIcon className="size-8" />,
    href: "/",
  },
  {
    _id: "customer_analytics", // Unique ID for Customer Analytics
    title: "Customer Analytics",
    gradient: "bg-gradient-to-tr from-red-600 to-orange-500",
    icon: <ChartBarBigIcon className="size-8" />,
    href: "/",
  },
  {
    _id: "product_analytics", // Unique ID for Product Analytics
    title: "Product Analytics",
    gradient: "bg-gradient-to-tr from-green-300 to-teal-200",
    icon: <ChartColumnBigIcon className="size-8" />,
    href: "/",
  },
  {
    _id: "marketing_analytics", // Unique ID for Marketing Analytics
    title: "Marketing Analytics",
    gradient: "bg-gradient-to-tr from-purple-300 to-indigo-300",
    icon: <ChartCandlestickIcon className="size-8" />,
    href: "/",
  },
  {
    _id: "operational_analytics", // Unique ID for Operational Analytics
    title: "Operational Analytics",
    gradient: "bg-gradient-to-tr from-fuchsia-600 to-purple-700",
    icon: <ServerCogIcon className="size-8" />,
    href: "/",
  },
  {
    _id: "financial_analytics", // Unique ID for Financial Analytics
    title: "Financial Analytics",
    gradient: "bg-gradient-to-tr from-gray-700 to-neutral-500",
    icon: <LandmarkIcon className="size-8" />,
    href: "/",
  },
  {
    _id: "store_settings", // Unique ID for Store Settings
    title: "Store Settings",
    gradient: "bg-gradient-to-tr from-lime-400 to-green-600",
    icon: <ShoppingBagIcon className="size-8" />,
    href: "/",
  },
  {
    _id: "customization_settings", // Unique ID for Customization Settings
    title: "Customization Settings",
    gradient: "bg-gradient-to-tr from-emerald-400 to-cyan-500",
    icon: <PaletteIcon className="size-8" />,
    href: "/",
  },
  {
    _id: "system_settings", // Unique ID for System Settings
    title: "System Settings",
    gradient: "bg-gradient-to-tr from-indigo-500 to-blue-700",
    icon: <CogIcon className="size-8" />,
    href: "/",
  },
];

export default navMenuData;
