import { ReactNode, useState } from "react";
import { Sidebar } from "@/components/SideBar/Sidebar";
import LogoInventory from "@/assets/images/logoInventory.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const LayoutFull = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full min-h-screen bg-grayBackground">
      <div className="relative flex">
        <div
          className={`flex flex-col h-full bg-white pt-4 transition-transform duration-300 ${
            isSidebarOpen ? "w-72" : "w-6 overflow-hidden"
          }`}
        >
          {isSidebarOpen && (
            <>
              <div className="flex w-72 pl-6 gap-4 items-center justify-center">
                <img
                  src={LogoInventory}
                  alt="Logo Inventarios"
                  className="w-40"
                />
              </div>
              <div className="flex h-full pt-4">
                <Sidebar />
              </div>
            </>
          )}
        </div>
        <div className="absolute top-1 right-1">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <IoIosArrowBack size={22} />
            ) : (
              <IoIosArrowForward size={22} />
            )}
          </button>
        </div>
      </div>
      <div className="flex w-full h-full scrollable-content max-h-screen overflow-y-auto p-10">
        {children}
      </div>
    </div>
  );
};

export default LayoutFull;
