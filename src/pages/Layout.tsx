import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />
      <main className="md:ml-64 mt-16 p-4 md:p-8 max-w-full overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
