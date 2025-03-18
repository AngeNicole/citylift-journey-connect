
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, MapPin, Calendar, CreditCard, Settings, HelpCircle } from "lucide-react";

const navigationItems = [
  { title: "Dashboard", icon: Home, url: "/" },
  { title: "Find Transport", icon: MapPin, url: "/find" },
  { title: "My Bookings", icon: Calendar, url: "/bookings" },
  { title: "Payments", icon: CreditCard, url: "/payments" },
  { title: "Settings", icon: Settings, url: "/settings" },
  { title: "Help", icon: HelpCircle, url: "/help" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="text-lg font-heading">CityLift Connect</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 px-4 py-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
