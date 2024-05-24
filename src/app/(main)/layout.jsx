import Navbar from "./_components/navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
