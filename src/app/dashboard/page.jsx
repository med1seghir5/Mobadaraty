"use client"
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessagesSquare, ListChecks, Users, Settings, Plus, Search, Bell  } from "lucide-react";
import { cn } from "@/lib/utils";

const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

const menuItems = [
  { name: "Home", href: "/dashboard", icon: <Home className="w-5 h-5" /> },
  { name: "Messages", href: "/dashboard/messages", icon: <MessagesSquare className="w-5 h-5" /> },
  { name: "Tasks", href: "/dashboard/tasks", icon: <ListChecks className="w-5 h-5" /> },
  { name: "Members", href: "/dashboard/members", icon: <Users className="w-5 h-5" /> },
  { name: "Settings", href: "/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
];

const workplaceItems = [
  { name: "it3am saim", href: "/it3amSaim", color: "bg-green-500" },
  { name: "Medical donations", href: "/dashboard/medical-donations", color: "bg-yellow-500" },
  { name: "Sofat ramadan", href: "/dashboard/sofat-ramadan", color: "bg-purple-500" },
  { name: "Kids donation", href: "/dashboard/kids-donation", color: "bg-blue-500" },
];

export default function Dashboard() {
  const pathname = usePathname();

  return (
    <div className="bg-[#D9D9D9] min-h-screen flex">
      <aside className="h-screen w-64 bg-white text-gray-900 p-5 fixed shadow-md">
        <h1 className="text-center text-2xl font-bold mb-5">Project M.</h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-4 py-2 rounded-lg transition",
                pathname === item.href ? "bg-gray-300" : "hover:bg-gray-200"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-6">
          <div className="flex justify-between items-center text-gray-500 uppercase text-xs font-semibold mb-2">
            <span>MY WORKPLACE</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <nav className="space-y-2">
            {workplaceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-2 rounded-lg transition",
                  pathname === item.href ? "bg-purple-100 text-purple-700 font-semibold" : "hover:bg-gray-100"
                )}
              >
                <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                <span className={interFont.className}>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 ml-64 p-6">
        <div className="flex flex-row justify-between items-center p-6">
          <div className="flex flex-col justify-center items-center text-left">
            <h2 className="text-3xl font-semibold">Good Morning User</h2>
            <p className="text-xl mt-2 text-[#828282]">Hope you have a good day</p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <Search />
            <Bell />
            <img src="/Frame 34415.svg"/>
          </div>
        </div>
      </main>
    </div>
  );
}
