import { EditorComponent } from "../_components/editor";
import { InputField } from "../_components/input";
import { OutputField } from "../_components/output";

const ProblemPage = ({ params, searchParams }) => {
  return (
    <div className="w-full h-full flex">
      <EditorComponent />
      <div className="h-full w-1/4 flex flex-col py-2 gap-2">
        <InputField />
        <OutputField />
      </div>
    </div>
  );
};

export default ProblemPage;
