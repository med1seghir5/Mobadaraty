"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessagesSquare, ListChecks, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils"; 

const menuItems = [
  { name: "Home", href: "/dashboard", icon: <Home className="w-5 h-5" /> },
  { name: "Messages", href: "/dashboard/messages", icon: <MessagesSquare className="w-5 h-5" /> },
  { name: "Tasks", href: "/dashboard/tasks", icon: <ListChecks className="w-5 h-5" /> },
  { name: "Members", href: "/dashboard/members", icon: <Users className="w-5 h-5" /> },
  { name: "Settings", href: "/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white p-5 fixed">
      <h1 className="text-2xl font-bold mb-5">🚀 Project M.</h1>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center space-x-3 px-4 py-2 rounded-lg transition",
              pathname === item.href ? "bg-gray-700" : "hover:bg-gray-800"
            )}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
