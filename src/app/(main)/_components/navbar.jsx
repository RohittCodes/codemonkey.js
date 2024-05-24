"use client";

import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Docs", path: "/docs" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
  ];

  let currentPath = usePathname();

  console.log(currentPath);

  return (
    <div className="h-16 bg-background w-full border-b border-border flex flex-row items-center justify-between px-4">
      <Image src="/assets/logo.svg" alt="Logo" width={32} height={32} />
      <div className="flex flex-row items-center rounded-full w-1/4 bg-background-2 p-2 ring-1 ring-border h-8 justify-between px-4 gap-4">
        {routes.map((route) => (
          <Link
            href={route.path}
            key={route.name}
            className="flex flex-row items-center"
          >
            <span
              className={cn(
                "text-sm font-semibold",
                currentPath === route.path
                  ? "text-blue-500 transition-transform"
                  : "text-text"
              )}
            >
              {route.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center gap-4">
        <SignInButton>Sign in</SignInButton>
      </div>
    </div>
  );
};

export default Navbar;
