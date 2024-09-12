import { ReactNode } from "react";
import { Sidebar } from "@/components/SideBar/Sidebar";
import LogoInventory from "@/assets/images/logoInventory.png";

const LayoutFull = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full min-h-screen bg-grayBackground">
      <div className="flex flex-col w-72 h-full bg-white  pt-4">
        <div className="flex w-72 pl-6 gap-4 items-center justify-center">
          <img src={LogoInventory} alt="Logo Inventarios" className="w-40" />
        </div>
        <div className="flex h-full pt-4">
          <Sidebar />
        </div>
      </div>
      <div className="flex w-full h-full scrollable-content max-h-screen overflow-y-auto p-10">
        {children}
      </div>
    </div>
  );
};

export default LayoutFull;
