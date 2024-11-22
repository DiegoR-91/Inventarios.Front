import { ReactNode } from "react";
import { Sidebar } from "@/components/SideBar/Sidebar";

const LayoutFull = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full min-h-screen bg-grayBackground">
      <div className="relative flex">
        <div className="flex flex-col h-full bg-white pt-4 transition-transform duration-300 ">
          <div className="flex h-full pt-4">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="flex w-full h-full scrollable-content max-h-screen overflow-y-auto p-10">
        {children}
      </div>
    </div>
  );
};

export default LayoutFull;
