import Sidebar from "./_components/sidebar";

const MainLayout = async ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="h-full w-full bg-background">{children}</div>
    </div>
  );
};

export default MainLayout;
