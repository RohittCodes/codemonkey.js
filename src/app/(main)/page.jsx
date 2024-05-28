import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const MainPage = () => {
  return (
    <div className="flex flex-col w-full h-[calc(100vh-64px)]">
      <div className="w-full py-4 px-20">
        <div className="flex items-center justify-center w-full rounded-r-[8%] rounded-l-3xl bg-opacity-10 h-[calc(100vh-64px)]">
          <div className="flex flex-col w-3/5 h-full p-8 items-start justify-center">
            <h1 className="text-4xl font-extrabold underline mb-2">
              <span className="text-indigo-600">Code</span>Monkey!
            </h1>
            <p className="text-7xl font-extrabold">A One-stop Solution</p>
            <p className="text-2xl font-extrabold mt-2">
              for all your programming needs...
            </p>
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
        <div className="w-full h-[calc(100vh-64px)]">
          <div className="flex flex-col w-full h-full items-center justify-center">
            <h1 className="text-4xl font-extrabold underline mb-4">
              <span className="text-indigo-600">Code</span>Monkey!
            </h1>
            <Image
              src="/assets/home.png"
              alt="Hero"
              width={600}
              height={800}
              className="rounded-md object-contaim shadow-border shadow-lg"
            />
          </div>
        </div>
        {/* Footer */}
      </div>
    </div>
  );
};

export default MainPage;
