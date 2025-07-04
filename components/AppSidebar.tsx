"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarTrigger } from "./ui/sidebar";

import { dashboard, orders, products, customers, utilities } from "../lib/MenuItems";
import AppSidebarGroup from "./AppSidebarGroup";
import { Button } from "./ui/button";
import { Flame } from "lucide-react";
import Link from "next/link";

const AppSidebar = () => {
  return (
    <>
      <Sidebar className="font-semibold" collapsible="icon">
        <SidebarHeader className="p-4 select-none">
          <SidebarContent>
            {/* <SidebarTrigger /> */}

            <Link href="#" className="flex gap-1">
              <Flame />
              <h6 className="text-xl font-bold">Shahp</h6>
            </Link>
          </SidebarContent>
        </SidebarHeader>
        <SidebarContent>
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
    </>
  );
};

export default AppSidebar;
