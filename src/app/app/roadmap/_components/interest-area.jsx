import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

const AreaOfInterest = () => {
  return (
    <div className="flex flex-row px-8 overflow-y-auto">
      <Card className="border-none">
        <CardHeader className="flex items-center justify-center">
          <CardTitle>Choose your specific areas of Interest</CardTitle>
          <CardDescription>
            Be bold, and be specific. Do your own research and choose the area
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-0">
          <Image
            src="/assets/goals.jpg"
            width={320}
            height={320}
            alt="Assets"
            className="rounded-md"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AreaOfInterest;
