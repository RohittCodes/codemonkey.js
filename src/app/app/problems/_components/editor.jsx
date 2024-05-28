"use client";

import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Select,
  SelectLabel,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const EditorComponent = ({ data, id }) => {
  const [language, setLanguage] = useState("javascript");
  const { theme } = useTheme();

  const [template, setTemplate] = useState("");
  const [loadingResult, setLoadingResult] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    // data passed here is an array of objects, which includes the language and the template code, so we need to extract the template code
    if (data) {
      const templateCode = data.find((item) => item.language === language);
      setTemplate(templateCode.code);
    }
  }, [data, language]);

  // post the code to the API to run it. Route is ${process.env.NEXT_PUBLIC_API_URL}/problems/run. Send the language and the code. Don't stringify the data as the id is a number
  const runCode = async () => {
    setLoadingResult(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/problems/run`, {
      method: "POST",
      // don;t stringify the data as the id is a number
      headers: {
        "Content-Type": "application/json",
      },
      // {message: 'Unexpected end of JSON input', problemId: 1}
      body: JSON.stringify({ language, code: template, id: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setLoadingResult(false);
      });
  };

  const handleLanguageChange = (value) => {
    // when the language is changed, set the new language and update the template code
    setLanguage(value);
  };

  const handleEditorChange = (value, event) => {
    // change the template code when the editor value changes, and do it when the language is changed
    setTemplate(value);
  };

  const [editorInstance, setEditorInstance] = useState(null);
  const [monacoInstance, setMonacoInstance] = useState(null);

  const handleEditorDidMount = (editor, monaco) => {
    // console.log("onMount: the editor instance:", editor);
    // console.log("onMount: the monaco instance:", monaco);

    setEditorInstance(editor);
    setMonacoInstance(monaco);

    monaco.editor.defineTheme("darkTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#09090bb9",
        "editorGutter.background": "#09090bb9",
        "editorLineNumber.foreground": "#fff",
        "editorCursor.foreground": "#ffffff",
        "editor.foreground": "#ffffff",
      },
    });

    monaco.editor.defineTheme("lightTheme", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#EDF1F7",
        "editorGutter.background": "#EDF1F7",
        "editorLineNumber.foreground": "#333",
        "editorCursor.foreground": "#000000",
        "editor.foreground": "#000000",
      },
    });

    monaco.editor.setTheme(theme === "dark" ? "darkTheme" : "lightTheme");
  };

  useEffect(() => {
    if (monacoInstance) {
      monacoInstance.editor.setTheme(
        theme === "dark" ? "darkTheme" : "lightTheme"
      );
    }
  }, [theme, monacoInstance]);

  const handleEditorWillMount = (monaco) => {
    console.log("beforeMount: the monaco instance:", monaco);
  };

  const handleEditorValidation = (markers) => {
    markers.forEach((marker) => console.log("onValidate:", marker.message));
  };

  return (
    <div className="h-full w-full flex flex-col gap-1">
      <div className="min-h-[42px] w-full flex justify-between items-center px-4 pt-0">
        <Select onValueChange={handleLanguageChange} className="text-xs">
          <SelectTrigger className="text-xs w-1/5 h-[32px] rounded-sm">
            <SelectValue placeholder={language} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-1">
          <Sheet>
            <SheetTrigger className="w-16 text-xs h-[32px] rounded-sm">
              <Button
                variant="outline"
                size="icon"
                onClick={runCode}
                id="run-button"
                className="w-16 text-xs h-[32px] rounded-sm"
              >
                Run
              </Button>
            </SheetTrigger>
            {loadingResult ? (
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Result of your submission</SheetTitle>
                </SheetHeader>
                <div className="w-full h-32 flex items-center justify-center">
                  Loading...
                </div>
              </SheetContent>
            ) : (
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Result of your submission</SheetTitle>
                  <SheetDescription>
                    The result of your submission is shown below
                  </SheetDescription>
                </SheetHeader>
                <div className="w-full h-full flex items-center justify-center mt-4">
                  {
                    <div className="w-full h-full flex flex-col gap-1">
                      {result.map((item, index) => (
                        <div
                          key={index}
                          className="w-full h-8 flex items-center justify-between px-2"
                        >
                          <span className="text-xs w-1/2">
                            Output Received: {item.output}
                          </span>
                          <span
                            className={cn(
                              "text-xs",
                              item.result === "Accepted"
                                ? "text-green-500"
                                : "text-red-500"
                            )}
                          >
                            {item.result}
                          </span>
                        </div>
                      ))}
                    </div>
                  }
                </div>
              </SheetContent>
            )}
          </Sheet>
        </div>
      </div>
      <div className="h-full w-full">
        <Editor
          options={{
            minimap: { enabled: false },
            fontSize: 12,
            wordWrap: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            renderLineHighlight: "gutter",
          }}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          beforeMount={handleEditorWillMount}
          onValidate={handleEditorValidation}
          language={language}
          defaultValue={template}
          className="h-full w-full mx-2 border border-border bg-background"
        />
      </div>
    </div>
  );
};
