import { Button } from "@/components/ui/button";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-4 pt-4">
      <h1 className="text-2xl font-bold">
        <Link href="/app/problems">Problem Set</Link>
      </h1>
    </div>
  );
};

export default Topbar;
