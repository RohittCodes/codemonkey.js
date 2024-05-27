import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProblemDetails = ({ data }) => {
  const { problem_id, title, difficulty, tags, description } = data;
  return (
    <div className="w-full h-1/2 flex">
      <Card className="w-full h-full flex flex-col justify-between overflow-y-auto">
        <CardHeader className="pb-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            Problem id:
            <span className="font-bold"> {problem_id}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="mx-4 my-1 flex items-start flex-col h-full justify-between bg-neutral-900 p-4 rounded-md">
          <div className="rounded-lg w-full mb-4">
            <h1 className="text-xl font-bold">Description of the problem</h1>
            <p className="text-base mt-2 text-opacity-10">{description}</p>
          </div>
          <div className="flex items-center gap-2">
            <span>Difficulty:</span>
            <Badge>{difficulty}</Badge>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-1">
          <span>Topics:</span>
          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <Badge key={index} className="mr-2">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProblemDetails;
