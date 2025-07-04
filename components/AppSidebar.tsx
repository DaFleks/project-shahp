"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "./ui/sidebar";

import { dashboard, orders, products, customers, utilities } from "../lib/MenuItems";
import AppSidebarGroup from "./AppSidebarGroup";
import { Button } from "./ui/button";
import { Flame, MoveLeft, PanelLeft } from "lucide-react";
import Link from "next/link";

const AppSidebar = () => {
  const { open, toggleSidebar } = useSidebar();
  
  return (
    <Sidebar className="font-bold" collapsible="icon">
      <SidebarHeader className="select-none bg-slate-800 text-white">
        <SidebarContent className="flex-row items-center justify-between overflow-hidden">
          {open && (
            <Link href="#" className="flex gap-1 items-center">
              <Flame size={18} />
              <h6 className="text-xl font-bold mt-1">Shahp</h6>
            </Link>
          )}
          <SidebarMenuButton onClick={toggleSidebar} className="w-fit cursor-pointer mt-1">
            <PanelLeft />
          </SidebarMenuButton>
        </SidebarContent>
      </SidebarHeader>
      <SidebarContent className="bg-slate-800 text-white">
        <AppSidebarGroup label="Dashboard" items={dashboard}></AppSidebarGroup>
        <AppSidebarGroup label="Orders" items={orders}></AppSidebarGroup>
        <AppSidebarGroup label="Products" items={products}></AppSidebarGroup>
        <AppSidebarGroup label="Customers" items={customers}></AppSidebarGroup>
        <AppSidebarGroup label="Utilities" items={utilities}></AppSidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter>
          <Button className="cursor-pointer">Log Out</Button>
        </SidebarFooter> */}
    </Sidebar>
  );
};

export default AppSidebar;
