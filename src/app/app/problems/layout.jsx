import Topbar from "./_components/topbar";

const ProblemsPage = ({ children }) => {
  return (
    <div className="flex w-full h-full overflow-x-hidden px-1 py-1">
      <div className="h-full w-full bg-background">{children}</div>
    </div>
  );
};

export default ProblemsPage;
