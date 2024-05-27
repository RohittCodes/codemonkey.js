"use client";

import { Input } from "@/components/ui/input";
import Topbar from "./_components/topbar";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Dot, Ellipsis, Send, SendHorizonal } from "lucide-react";
import { useState } from "react";
import Markdown from "markdown-to-jsx";

const CodeChimpPage = () => {
  // messages should be an array of objects with the following structure: { type: "user" | "bot", message: string }
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleCodeSnippetChange = (e) => {
    setCodeSnippet(e.target.value);
  };

  // handle the prompt submission to an api route that will return a response
  const handlePromptSubmit = async () => {
    if (prompt.trim() === "") {
      return;
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", message: prompt },
    ]);
    setPrompt("");
    setIsTyping(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/codechimp/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, codeSnippet }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", message: data.explanation },
        ]);
        setIsTyping(false);
      })
      .catch((err) => {
        console.error(err);
        setIsTyping(false);
      });
  };

  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full flex justify-between space-x-2 h-full">
        <ScrollArea className="w-3/4 h-[calc(100vh-8rem)] rounded-md border border-border">
          <div className="w-full h-full flex flex-col space-y-2 p-2">
            <div className="w-full flex flex-col space-y-2 px-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-center space-x-2 w-full ${
                    msg.type === "user" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`p-2 rounded-md max-w-fit w-[80%] overflow-x-auto ${
                      msg.type === "user"
                        ? "bg-primary text-black"
                        : "bg-secondary text-white"
                    }`}
                  >
                    <Markdown
                      className="text-sm"
                      options={{ forceBlock: true }}
                    >
                      {msg.message}
                    </Markdown>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="w-full flex items-center justify-end">
                  <div className="p-2 rounded-md bg-secondary text-black">
                    <Ellipsis size={24} />
                  </div>
                </div>
              )}
            </div>
          </div>
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
            id="send-prompt"
          >
            <SendHorizonal size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CodeChimpPage;
