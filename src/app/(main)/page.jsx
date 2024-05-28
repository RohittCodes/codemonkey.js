import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const MainPage = () => {
  const carouselItems = [
    {
      title: "Explore Section",
      description: "A One-stop Solution for all your programming needs...",
      imageUrl: "/assets/home.png",
    },
    {
      title: "Code Editor",
      description: "A One-stop Solution for all your programming needs...",
      imageUrl: "/assets/editor.png",
    },
    {
      title: "Problems Set",
      description: "A One-stop Solution for all your programming needs...",
      imageUrl: "/assets/problems.png",
    },
  ];

  return (
    <div className="flex flex-col w-full h-[calc(100vh-64px)]">
      <div className="w-full py-4 px-20">
        <div className="flex items-center justify-center w-full rounded-3xl bg-opacity-10 h-[calc(100vh-108px)] shadow-lg shadow-border py-8 px-4 bg-background duration-300 mt-2">
          <div className="flex flex-col w-3/5 h-full p-8 items-start justify-center py-12">
            <h1 className="text-4xl font-extrabold underline mb-2">
              <span className="text-indigo-600">Code</span>Monkey!
            </h1>
            <p className="text-7xl font-extrabold">A One-stop Solution</p>
            <p className="text-2xl font-extrabold mt-2">
              for all your programming needs...
            </p>
            <span className="text-sm mt-4 text-muted-foreground">
              CodeMonkey is still in it&apos;s development phase. We are working
              hard to bring you the best experience possible. Stay tuned for
              updates!
            </span>
            <div className="flex flex-row space-x-4 mt-6">
              <Link href="/sign-in">
                <Button variant="outline">Get Started</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-2/5 h-full pr-6">
            <Image
              src="/assets/MessyDoodle.svg"
              alt="Illustration"
              width={400}
              height={400}
              className="rounded-md object-contain"
            />
          </div>
        </div>
        <div className="w-full h-[calc(100vh-64px)] mt-8">
          <div className="flex flex-col w-full h-full items-center justify-center">
            <Carousel className="w-fit-content h-fit-content max-w-3xl">
              <CarouselContent>
                {carouselItems.map((item, index) => (
                  <CarouselItem key={index}>
                    <Card className="h-fit-content flex flex-col items-center justify-center border-none px-0">
                      <CardHeader>
                        <CardTitle className="text-3xl font-extrabold">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={item.imageUrl}
                          alt="Illustration"
                          width={650}
                          height={500}
                          className="rounded-md object-contain"
                        />
                      </CardContent>
                      <CardFooter>
                        <p>{item.description}</p>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="w-full h-16 bg-background bg-opacity-10 flex items-center justify-center border-t-[1px] border-border py-2">
        <span className="text-muted-foreground">
          &copy; {new Date().getFullYear()} CodeMonkey. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default MainPage;
