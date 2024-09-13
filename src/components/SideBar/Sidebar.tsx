import { useState } from "react";
import { sidebarItems } from "@/constants/sidebarItems";
import { IoMdArrowDropdown } from "react-icons/io";
import LogoCMPC from "@/assets/images/LogoCMPC.png";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";

export const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (index: number | null) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full text-white p-4">
      <div>
        {sidebarItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center">
              <div className="mr-2">{item.icon}</div>

              <button
                className="w-full text-left text-lg py-2 px-4 text-greenSecondaryButton"
                onClick={() => toggleMenu(index)}
              >
                {item.title}
              </button>
              <div className="flex ml-auto">
                <IoMdArrowDropdown
                  className="text-greenSecondaryButton hover:cursor-pointer"
                  size={20}
                  onClick={() => toggleMenu(index)}
                />
              </div>
            </div>
            {openMenu === index && (
              <div className="ml-4 bg-greenBgSideItem">
                {item.subMenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className={cn(
                      "block py-2 px-4 text-greenPrimaryButton hover:text-greenSecondaryButton hover:font-semibold",
                      location.pathname === subItem.path && "font-semibold"
                    )}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-1 w-full">
        <div className="flex flex-col w-full items-center justify-end gap-10">
          <button className="flex border border-black/50 p-2 w-52 text-greenPrimaryButton justify-center">
            Cerrar Sesión
          </button>
          <div>
            <img src={LogoCMPC} alt="Logo CMPC" />
          </div>
        </div>
      </div>
    </div>
  );
};
