"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { DataTableDemo } from "./_components/table";
import Topbar from "./_components/topbar";

const CodePage = () => {
  // Fetch data from API
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/problems/fetch`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex flex-col h-full w-full px-4">
      <Topbar />
      <DataTableDemo data={data} />
    </div>
  );
};

export default CodePage;
