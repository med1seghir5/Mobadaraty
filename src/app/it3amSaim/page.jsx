"use client"
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessagesSquare, ListChecks, Users, Settings, Plus, Search, SquarePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

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
  { name: "it3am saim", href: "/dashboard/it3am-saim", color: "bg-green-500" },
  { name: "Medical donations", href: "/dashboard/medical-donations", color: "bg-yellow-500" },
  { name: "Sofat ramadan", href: "/dashboard/sofat-ramadan", color: "bg-purple-500" },
  { name: "Kids donation", href: "/dashboard/kids-donation", color: "bg-blue-500" },
];

const initialTasks = {
    "To Do": [
      {
        id: 1,
        title: "Get supplies",
        description: "Buy the list of needs",
        priority: "Low",
        status: "To Do",
        comments: 12,
        files: 0,
        avatars: ["/Photo.svg", "/Photo3.svg", "/Photo2.svg"],
      },
      {
        id: 2,
        title: "Research for volunteres",
        description: "Find volunteers",
        priority: "High",
        status: "To Do",
        comments: 12,
        files: 0,
        avatars: ["/Photo2.svg", "/Photo3.svg", "/Photo4.svg"],
      },
      {
        id: 3,
        title: "Contact place owner",
        description: "contact mohamed",
        priority: "High",
        status: "To Do",
        comments: 12,
        files: 0,
        avatars: ["/Photo.svg", "/Photo3.svg", "/Photo2.svg"],
      },
    ],
    "On Progress": [
      {
        id: 4,
        title: "Initiative de Naïma",
        description: "",
        priority: "Low",
        status: "On Progress",
        comments: 14,
        files: 15,
        avatars: ["/Photo.svg"],
        images: ["/Help.svg"],
      },
      {
        id: 5,
        title: "Donations announce",
        description: "",
        priority: "Low",
        status: "On Progress",
        comments: 9,
        files: 10,
        avatars: ["/Photo4.svg", "/Photo2.svg"],
        images: ["/Donnation.svg"],
      },
    ],
    "Done": [
      {
        id: 6,
        title: "Iftar de la grande poste",
        description: "",
        priority: "Completed",
        status: "Done",
        comments: 12,
        files: 15,
        avatars: ["/Photo4.svg", "/Photo2.svg"],
        images: ["/iftar.svg"],
      },
    ],
  };  

export default function It3amSaim() {
  const pathname = usePathname();
  const [tasks, setTasks] = useState(initialTasks);
  const moveTask = (taskId, fromColumn, toColumn) => {
    const taskToMove = tasks[fromColumn].find((task) => task.id === taskId);
    if (!taskToMove) return;

    setTasks((prevTasks) => ({
      ...prevTasks,
      [fromColumn]: prevTasks[fromColumn].filter((task) => task.id !== taskId),
      [toColumn]: [...prevTasks[toColumn], taskToMove],
    }));
  };
  return (
    <div className="bg-[#ffff] min-h-screen flex">
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

      <main className="flex-1 ml-64 p-1">
        <div className="flex flex-row justify-between items-center p-6 border-b-1 border-[#DBDBDB]">
          <div className="flex flex-row justify-start gap-3 items-center text-left bg-[#F5F5F5] rounded-xl w-96 h-12 pl-2">
            <Search />
            <input type="text" placeholder="Search for anything..." className="p-2 w-full"/>
          </div>
          <div className={`${interFont.className} flex flex-col items-center gap-0`}>
            <p className="text-xl">Alger Centre</p>
            <span className="text-[#787486]">1600,alger</span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center p-10">
            <div className="flex flex-row justify-between items-center w-[500px] gap-5 ">
                <h3 className={`${interFont.className} text-5xl font-semibold`}>It3am Saim</h3>
                <img src="/idit.svg" className="h-8"/>
            </div>
            <div className="flex flex-row justify-around items-center gap-10">
                <div className="flex flex-row justify-center items-center gap-1">
                    <img src="/square-plus (1).svg"/>
                    <a href="" className={`${interFont.className} text-[#417FFC] font-semibold`}>Invite</a>
                </div>
                <img src="/friends.svg" alt="friend"/>
            </div>
        </div>

        <div className="flex flex-row justify-between items-center p-5" >
            <div className="flex flex-row justify-center items-center w-[500px] gap-5 ">
                <div>
                    <select
                    name="Filter"
                    className={`${interFont.className} border border-[#787486] rounded-lg text-[#787486] bg-[#ffff] font-semibold w-32 px-5 py-1`}
                    defaultValue=""
                    >    
                        <option value="" disabled>Filter</option>
                        <option value="Filter">Filter</option>
                        <option value="filter">Filter</option>
                    </select>
                </div>
                <div>
                    <select
                    name="Today"
                    className={`${interFont.className} border border-[#787486] rounded-lg text-[#787486] bg-[#ffff] font-semibold w-32 px-5 py-1`}
                    defaultValue=""
                    >    
                        <option value="" disabled>Today</option>
                        <option value="Today">Today</option>
                        <option value="Today">Today</option>
                    </select>
                </div>
            </div>
            <div className="mr-20">
               <button className={`${interFont.className} border border-[#787486] rounded-lg text-[#787486] bg-[#ffff] font-semibold w-24 px-5 py-1`}>
                Share
               </button> 
            </div>
        </div>

        <div className="w-full p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-row justify-between items-start p-5 gap-12">
            {Object.keys(tasks).map((status) => (
            <div key={status} className="flex flex-col w-1/3 bg-white rounded-lg shadow-lg border-t-4 border-gray-200">

                <h2 className="text-lg font-semibold flex items-center gap-2 p-4">
                <span className={`w-2 h-2 rounded-full ${
                    status === "To Do" ? "bg-red-500" : status === "On Progress" ? "bg-yellow-500" : "bg-green-500"
                }`}></span>
                {status} <span className="text-gray-400">{tasks[status].length}</span>
                </h2>

                <div className="p-5 flex flex-col gap-6">
                {tasks[status].map((task) => (
                    <motion.div
                    key={task.id}
                    className="bg-white rounded-lg shadow-md p-10 border border-gray-200 cursor-grab relative"
                    drag
                    dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    onDragEnd={(event, info) => {
                        const targetColumn = info.point.x > 300 ? (info.point.x > 600 ? "Done" : "On Progress") : "To Do";
                        if (targetColumn !== status) {
                        moveTask(task.id, status, targetColumn);
                        }
                    }}
                    >
                    <span
                        className={`absolute top-2 left-2 px-2 py-1 text-xs rounded-full ${
                        task.priority === "Completed"
                            ? "bg-green-100 text-green-500"
                            : task.priority === "High"
                            ? "bg-red-100 text-red-500"
                            : "bg-yellow-100 text-yellow-500"
                        }`}
                    >
                        {task.priority}
                    </span>

                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    {task.description && <p className="text-gray-500 text-sm">{task.description}</p>}

                    {task.images && task.images.length > 0 && (
                        <div className="mt-3 flex flex-col justify-center items-center gap-2">
                        {task.images.map((image, index) => (
                            <img key={index} src={image} alt="task-img" className="w-full rounded-lg" />
                        ))}
                        </div>
                    )}

                    {/* Task Details */}
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex">
                        {task.avatars.map((avatar, index) => (
                            <img
                            key={index}
                            src={avatar}
                            alt="avatar"
                            className="w-6 h-6 rounded-full border-2 border-white -ml-2"
                            />
                        ))}
                        </div>
                        <div className="flex text-gray-400 text-sm gap-2">
                        <span>💬 {task.comments} comments</span>
                        <span>📂 {task.files} files</span>
                        </div>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>
            ))}
        </div>
    </div>
    </main>
      
    </div>
  );
}
