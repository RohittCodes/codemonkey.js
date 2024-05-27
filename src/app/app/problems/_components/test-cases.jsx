import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TestCases = ({ data }) => {
  const input = data.map((item) => item.input);
  const output = data.map((item) => item.output);

  return (
    <div className="w-full h-1/2 flex">
      <div className="w-full h-full flex flex-col justify-between rounded-md border border-border p-1">
        <div className="w-full flex justify-between items-center border-b border-border p-2 mb-1">
          <h1 className="text-lg font-bold">Test Cases</h1>
        </div>
        <Tabs
          defaultValue="input"
          className="w-full h-full overflow-y-auto px-1"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="input" className="text-center">
              Input
            </TabsTrigger>
            <TabsTrigger value="output" className="text-center">
              Output
            </TabsTrigger>
          </TabsList>
          <TabsContent value="input" className="w-full h-full">
            <Card className="w-full h-full flex flex-col border-none">
              <CardHeader className="pb-2 pt-2">
                <CardTitle>Input</CardTitle>
              </CardHeader>
              <CardContent className="mx-4 my-1 flex items-start flex-col justify-between bg-neutral-900 p-4 rounded-md">
                <div className="rounded-lg w-full">
                  {/* display the input on two lines, the input is a string representing an array, so whenever there's a ] followed by a [, add a newline */}
                  {input.map((item, index) => (
                    <pre key={index}>
                      {item.toString().replace(/\]\[/g, "]\n[")}
                    </pre>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="output" className="w-full h-full">
            <Card className="w-full h-full flex flex-col border-none">
              <CardHeader className="pb-2 pt-2">
                <CardTitle>Output</CardTitle>
              </CardHeader>
              <CardContent className="mx-4 my-1 flex items-start flex-col justify-between bg-neutral-900 p-4 rounded-md">
                <div className="rounded-lg w-full">
                  {/* display the output on two lines, the output is a string representing an array, so whenever there's a ] followed by a [, add a newline */}
                  {output.map((item, index) => (
                    <pre key={index}>
                      {item.toString().replace(/\]\[/g, "]\n[")}
                    </pre>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TestCases;
