"use client";

import AreaOfInterest from "../roadmap/_components/interest-area";

const PlanPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="px-4 py-2 border border-border w-[152px] rounded-full">
        Get Started ✨
      </div>
      <div className="flex-1 mt-2 border border-border rounded-lg py-6 px-4">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-semibold">
            Let&apos;s get started by creating your Developer Roadmap first
          </span>
          <span className="text-base text-muted-foreground">
            (You can always search for new roadmaps later, but the initial
            roadmap will be helpful to get started with study plan)
          </span>
        </div>
        <div className="w-full h-[1px] mt-4 bg-border" />
        <div className="flex flex-row items-center mt-4">
          <AreaOfInterest />
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
