"use client";

import { MenuItem } from "@/lib/MenuItems";
import { SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "./ui/sidebar";
import Link from "next/link";

interface AppSidebarGroupProps {
  label: String;
  items: MenuItem[];
}

const AppSidebarGroup = ({ label, items }: AppSidebarGroupProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-white">{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default AppSidebarGroup;
