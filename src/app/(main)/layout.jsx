import Navbar from "./_components/navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen bg-background bg-opacity-10">
      <Navbar />
      <div className="h-screen w-full flex flex-col items-center justify-center overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
