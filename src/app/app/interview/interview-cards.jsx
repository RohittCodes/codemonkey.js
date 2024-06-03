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

import { TooltipContent } from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShepherdJourneyProvider, useShepherd } from "react-shepherd";


const InterviewCards = () => {

  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  const cardData = [
    {
      title: "My Interview Preparation",
      description:
        "Learn how to answer general interview questions about yourself, your role, and the company.",
      image: "/assets/myinterview-prep.png",
      info: "Code Editor",
      buttonText: "Prepare",
      path: "/app/problems",
    },
    {
      title: "Interview Essentials",
      description: "Few companies test candidates skills through Aptitude tests. Practice in a systematic way and sharpen your reasoning ability, speed and accuracy in solving questions",
      image: "/assets/interviewEse.png",
      info: "CodeChimp",
      buttonText: "Prepare",
      path: "/app/codechimp",
    },
    {
      title: "Numerical Ability",
      description:
        "In this course, you will attempt Numerical ability questions. It contains questions covering topics which are asked during the screening process of many companies.",
      image: "/assets/numberability.png",
      info: "Study Planner",
      buttonText: "Prepare",
      path: "/app/plan",
    },
    {
      title: "Verbal Ability",
      description:
        "In this course, you will attempt verbal ability questions. It contains questions covering topics like word power, sentence correction, spotting errors and verbal reasoning.",
      image: "/assets/varbalability.png",
      info: "Roadmap Planner",
      buttonText: "Prepare",
      path: "/app/roadmap",
    },
    {
      title: "CS/IT Fundamentals",
      description:
        "In this course, you can practice and Improve fundamentals CS and IT concepts that are asked in an interview will cover topics like C, C++. DS, OOPs, DBMS, CN, MS Off, Cloud Computing, Computer Architecture, OS, Networking Security",
      image: "/assets/fundamentals.png",
      info: "Interview Prep",
      buttonText: "Prepare",
      path: "/app/interview",
    },
    {
      title: "Mock Interview",
      description:
        "Taking the Mock Practice Test is essential to ensure that your laptop/system supports the test environment. Therefore, it is recommended to attempt it before each course exam.",
      image: "/assets/mockinterview.png",
      info: "Interview Prep",
      buttonText: "Start Test",
      path: "/app/interview",
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full h-full px-4 py-2">
      <ShepherdJourneyProvider>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">INTERVIEW PREPARATION</h1>
        </div>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-2">
          {cardData.map((card, index) => (
            <Card className="h-full w-full px-0 py-0" key={index}>
              
              <CardContent className="h-48 w-full mt-5">
                <Image
                  className="rounded-md object-cover w-full h-full"
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={240}
                />
              </CardContent>
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

export default InterviewCards;
