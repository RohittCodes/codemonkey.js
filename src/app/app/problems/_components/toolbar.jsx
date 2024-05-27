"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bug, Copy, HandHelping, HelpCircle, Lightbulb } from "lucide-react";
import Markdown from "markdown-to-jsx";
import { set } from "mongoose";
import { useState } from "react";

const Toolbar = (
  { data } // data is the problem object
) => {
  const {
    problem_id,
    templateCode,
    testcases,
    title,
    description,
    tags,
    difficulty,
  } = data;

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isDebugging, setIsDebugging] = useState(false);
  const [isHelping, setIsHelping] = useState(false);

  const [optimizedCode, setOptimizedCode] = useState("");
  const [debuggedCode, setDebuggedCode] = useState("");
  const [help, setHelp] = useState("");

  // api route to optimize the code is ${process.env.NEXT_PUBLIC_API_URL}/codetools/optimize
  // api route to debug the code is ${process.env.NEXT_PUBLIC_API_URL}/codetools/debug
  // api route to get help with the code is ${process.env.NEXT_PUBLIC_API_URL}/codetools/help

  const optimizeCode = async () => {
    // post the code to the API to optimize it
    setIsOptimizing(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/codetools/optimize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Code is an array of objects, so we need to extract the code
      body: JSON.stringify({
        code: templateCode[1].code,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsOptimizing(false);
        setOptimizedCode(data);
      });
  };

  const debugCode = async () => {
    // post the code to the API to debug it
    setIsDebugging(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/codetools/debug`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Code is an array of objects, so we need to extract the code
      body: JSON.stringify({
        code: templateCode[1].code,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsDebugging(false);
        setDebuggedCode(data);
      });
  };

  const getHelp = async () => {
    // post the code to the API to get help
    setIsHelping(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/codetools/help`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Code is an array of objects, so we need to extract the code
      body: JSON.stringify({
        description: description,
        code: templateCode[1].code,
        tags: tags,
        difficulty: difficulty,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsHelping(false);
        setHelp(data);
      });
  };

  return (
    <div className="h-full w-full flex flex-col gap-2 items-center pl-1">
      <Button size="icon" variant="outline">
        <HelpCircle size={24} />
      </Button>
      <div className="w-full bg-border h-0.5" />
      <div className="w-full flex flex-col gap-2 items-center">
        <Sheet>
          <SheetTrigger className="w-full">
            <Button size="icon" variant="outline" onClick={optimizeCode}>
              <Lightbulb size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Code Optimizer</SheetTitle>
            </SheetHeader>
            {isOptimizing ? (
              <div>Loading...</div>
            ) : (
              <div className="w-full h-fit my-2 py-2 px-2 mx-2 bg-neutral-900 p-2 overflow-auto rounded-sm relative">
                <Button
                  size="sm"
                  variant="outline"
                  className="mb-2 flex items-center justify-end mx-2"
                  onClick={() => {
                    navigator.clipboard.writeText(optimizedCode.code) &&
                      alert("Code copied to clipboard");
                  }}
                >
                  <Copy size={16} />
                </Button>
                <Markdown>{optimizedCode.code}</Markdown>
              </div>
            )}
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger className="w-full">
            <Button size="icon" variant="outline" onClick={debugCode}>
              <Bug size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Code Debugger</SheetTitle>
            </SheetHeader>
            {isDebugging ? (
              <div>Loading...</div>
            ) : (
              <div className="w-full h-fit my-2 py-2 px-2 mx-2 bg-neutral-900 p-2 overflow-auto rounded-sm relative">
                <Button
                  size="sm"
                  variant="outline"
                  className="mb-2 flex items-center justify-end mx-2"
                  onClick={() => {
                    navigator.clipboard.writeText(debuggedCode.code) &&
                      alert("Code copied to clipboard");
                  }}
                >
                  <Copy size={16} />
                </Button>
                <Markdown>{debuggedCode.code}</Markdown>
              </div>
            )}
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger className="w-full">
            <Button size="icon" variant="outline" onClick={getHelp}>
              <HandHelping size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Code Helper</SheetTitle>
            </SheetHeader>
            {isHelping ? (
              <div>Loading...</div>
            ) : (
              <div className="w-full h-fit my-2 py-2 px-2 mx-2 bg-neutral-900 p-2 overflow-x-auto overflow-y-auto rounded-sm relative">
                <Markdown className="w-full text-sm">{help.help}</Markdown>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Toolbar;
