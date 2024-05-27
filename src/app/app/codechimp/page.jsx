"use client";

import { Input } from "@/components/ui/input";
import Topbar from "./_components/topbar";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Send, SendHorizonal } from "lucide-react";
import { useState } from "react";

const CodeChimpPage = () => {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  // handle the prompt submission to an api route that will return a response
  const handlePromptSubmit = () => {};

  const handleCodeSnippetChange = (e) => {
    setCodeSnippet(e.target.value);
  };

  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full flex justify-between space-x-2 h-full">
        <ScrollArea className="w-3/4 h-[calc(100vh-8rem)] rounded-md border border-border">
          <div className="w-full h-screen"></div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        {/* Chat widget */}
        <div className="w-1/4 h-[calc(100vh-8rem)]">
          <Textarea
            className="w-full h-full resize-none"
            placeholder="Have any code snippets to share? Paste it here! and share the prompt below"
            onChange={handleCodeSnippetChange}
            value={codeSnippet}
          />
        </div>
      </div>
      <div className="h-16 w-full flex items-center justify-center">
        <div className="w-full h-14 px-2 flex items-center justify-between space-x-2 border border-border rounded-md">
          <Input
            placeholder="Type your prompt here"
            className="w-full h-12 ring-offset-0 border-0 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            onChange={handlePromptChange}
            value={prompt}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handlePromptSubmit();
              }
            }}
          />
          <Button
            variant="outline"
            size="icon"
            className="flex items-center justify-center w-10 h-10"
            onClick={handlePromptSubmit}
          >
            <SendHorizonal size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CodeChimpPage;
