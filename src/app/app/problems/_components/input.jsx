import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const InputField = () => {
  return (
    <div className="h-1/2 w-full flex flex-col px-2 gap-2">
      <div className="flex items-center justify-between px-4 bg-background">
        <h2 className="text-lg font-bold text-primary">Input</h2>
      </div>
      <Textarea className={cn("flex-1 resize-none overflow-y-auto")} />
    </div>
  );
};
