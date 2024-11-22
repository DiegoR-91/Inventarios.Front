import { useState } from "react";
import { sidebarItems } from "@/constants/sidebarItems";
import { IoMdArrowDropdown } from "react-icons/io";
import LogoCMPC from "@/assets/images/LogoCMPC.png";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import LogoInventory from "@/assets/images/logoInventory.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import IconLogoMinimized from "@/assets/icons/IconLogoMinimized";
import IconLogout from "@/assets/icons/IconLogout";
import IconoCMPC from "@/assets/icons/IconCMPC";

export const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = (index: number | null) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "flex flex-col h-full text-white bg-white p-4 transition-all duration-300",
        isCollapsed ? "w-16 px-0 pl-[0.30rem]" : "w-72"
      )}
    >
      {/* Toggle Sidebar Button */}
      <div className="flex flex-col items-center justify-between mb-4">
        {!isCollapsed ? (
          <div className="flex w-72  pl-6 gap-4 items-center justify-center">
            <img src={LogoInventory} alt="Logo Inventarios" className="w-32" />
          </div>
        ) : (
          <div className="flex  items-center justify-center">
            <IconLogoMinimized />
          </div>
        )}
        {!isCollapsed ? (
          <button
            onClick={toggleSidebar}
            className="text-greenSecondaryButton p-2 ml-auto"
          >
            <IoIosArrowBack size={20} />
          </button>
        ) : (
          <button
            onClick={toggleSidebar}
            className="text-greenSecondaryButton p-2"
          >
            <IoIosArrowForward size={20} />
          </button>
        )}
      </div>

      {/* Sidebar Items */}
      <div className="flex flex-col flex-1">
        {sidebarItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <div key={index} className="flex flex-col w-full">
              <div
                className="flex w-full items-center hover:cursor-pointer"
                onClick={() => toggleMenu(index)}
              >
                {/* Icon */}
                <div className="flex w-24 items-center justify-center mr-2">
                  {isActive && isCollapsed ? (
                    <Link to={item.path}>{item.iconActive}</Link>
                  ) : (
                    <Link to={item.path}>{item.icon}</Link>
                  )}
                </div>

                {/* Title */}
                {!isCollapsed && (
                  <button className="w-full text-left text-lg py-2 pr-4 text-greenSecondaryButton">
                    {item.title}
                  </button>
                )}

                {/* Dropdown Icon */}
                {!isCollapsed && (
                  <div className="flex ml-auto">
                    <IoMdArrowDropdown
                      className="text-greenSecondaryButton"
                      size={20}
                      onClick={() => toggleMenu(index)}
                    />
                  </div>
                )}
              </div>

              {/* Submenu */}
              {!isCollapsed && openMenu === index && (
                <div className="pl-12 bg-greenBgSideItem">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className={cn(
                        "block text-sm py-2 px-4 text-greenPrimaryButton hover:text-greenSecondaryButton hover:font-semibold",
                        location.pathname === subItem.path && "font-semibold"
                      )}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-end gap-10">
        {!isCollapsed ? (
          <button className="flex border border-black/50 p-2 w-52 text-greenPrimaryButton justify-center">
            Cerrar Sesión
          </button>
        ) : (
          <div className="flex w-full h-20">
            <IconLogout />
          </div>
        )}
        {!isCollapsed ? (
          <div>
            <img
              src={LogoCMPC}
              alt="Logo CMPC"
              className={cn(isCollapsed ? "w-10" : "w-20")}
            />
          </div>
        ) : (
          <IconoCMPC />
        )}
      </div>
    </div>
  );
};
