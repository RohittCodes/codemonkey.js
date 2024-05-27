import Topbar from "./_components/topbar";

const CodeChimpLayout = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between gap-2 px-4 py-4">
      <Topbar />
      {children}
    </div>
  );
};

export default CodeChimpLayout;
