import Sidebar from "./_components/sidebar";

const MainLayout = async ({ children }) => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="h-full w-full bg-background px-4 py-4">{children}</div>
    </div>
  );
};

export default MainLayout;
