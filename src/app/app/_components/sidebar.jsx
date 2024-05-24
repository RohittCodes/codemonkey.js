"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Home,
  LucideLogOut,
  NotebookText,
  CodeXml,
  LandPlot,
  MessageCircleCode,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { dark } from "@clerk/themes";

const Sidebar = () => {
  const routes = [
    { name: "App", path: "/app", icon: Home },
    { name: "Study Planner", path: "/app/plan", icon: NotebookText },
    { name: "Code", path: "/app/problems", icon: CodeXml },
    { name: "Interview Prep", path: "/app/interview", icon: LandPlot },
    { name: "CodeChimp", path: "/app/codechimp", icon: MessageCircleCode },
  ];

  let currentPath = usePathname();

  return (
    <div className="flex flex-col w-16 h-full bg-background border-r border-border justify-between items-center px-4 py-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <Link href={"/app"}>
            <Image src="/assets/logo.svg" alt="Logo" width={32} height={32} />
          </Link>
          <div className="h-[1px] w-8 bg-border" />
        </div>
        <div className="flex flex-col items-center gap-4">
          {routes.map((route) => (
            <div
              className={cn(
                "rounded-md p-2 transition-transform",
                currentPath === route.path &&
                  "backdrop-filter backdrop-blur-sm border border-border transform scale-105"
              )}
              key={route.name}
            >
              <Link href={route.path} className="flex flex-col items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <route.icon
                        className={cn(
                          "text-sm font-semibold",
                          currentPath === route.path
                            ? "text-blue-500 transition-transform"
                            : "text-text"
                        )}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center" sideOffset={24}>
                      {route.name}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <UserButton appearance={{ baseTheme: dark }} />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <SignOutButton>
                <Button size="icon" className="h-10 w-10">
                  <LucideLogOut size={20} />
                </Button>
              </SignOutButton>
            </TooltipTrigger>
            <TooltipContent side="right" align="center" sideOffset={24}>
              Logout
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Sidebar;
