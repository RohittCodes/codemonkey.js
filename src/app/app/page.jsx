"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useUser } from "@clerk/nextjs";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShepherdJourneyProvider, useShepherd } from "react-shepherd";
import { Provider } from "./_components/steps";

const Application = () => {
  const user = useUser();

  const name = user?.user?.firstName || user?.user?.fullName || "there";

  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  const cardData = [
    {
      title: "Code Editor",
      description:
        "Write and run your code. If you get stuck, our Ai tools will get you back on track.",
      image: "/assets/code-editor.jpg",
      info: "Code Editor",
      buttonText: "Start Coding",
      path: "/app/problems",
    },
    {
      title: "CodeChimp",
      description: "Learn to code and clarify your doubts with CodeChimp.",
      image: "/assets/codechimp.jpg",
      info: "CodeChimp",
      buttonText: "Ask Doubts",
      path: "/app/codechimp",
    },
    {
      title: "Study Planner",
      description:
        "Plan your study schedule and track your progress, all in one place.",
      image: "/assets/study-planner.jpg",
      info: "Study Planner",
      buttonText: "Start Planning",
      path: "/app/plan",
    },
    {
      title: "Roadmap Planner",
      description:
        "Plan your career roadmap and track your progress with ease.",
      image: "/assets/roadmap-planner.jpg",
      info: "Roadmap Planner",
      buttonText: "Plan Roadmap",
      path: "/app/roadmap",
    },
    {
      title: "Interview Prep",
      description:
        "Prepare for your next interview with our interview prep tool.",
      image: "/assets/interview-prep.jpg",
      info: "Interview Prep",
      buttonText: "Prepare",
      path: "/app/interview",
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full h-full px-4 py-2">
      <ShepherdJourneyProvider>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Hello {name}!</h1>
          <Provider />
        </div>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-2">
          {cardData.map((card, index) => (
            <Card className="h-full w-full px-0 py-0" key={index}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {card.title}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild={true}>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-4 w-4"
                        >
                          <Info />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" align="center" sideOffset={8}>
                        <span className="text-sm bg-background p-2 rounded-md border border-border">
                          {card.info}
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="h-48 w-full">
                <Image
                  className="rounded-md object-cover w-full h-full"
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={240}
                />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  variant="outline"
                  onClick={() => handleRedirect(card.path)}
                  id={`info-${index}`}
                >
                  {card.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ShepherdJourneyProvider>
    </div>
  );
};

export default Application;
