import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full h-10 flex items-center justify-between">
      <h1 className="text-2xl font-bold">CodeChimp</h1>
      <Button variant="outline" size="icon" className="p-2 h-8 w-8">
        <FileQuestion size={26} />
      </Button>
    </div>
  );
};

export default Topbar;
