import SearchInput from "@/components/Input/SearchInput";
import { ReactNode } from "react";
import { FaUserCircle } from "react-icons/fa";

const ModulesContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex">
        <div>
          <SearchInput
            isEmptyField={true}
            className="w-96 p-[0.30rem] rounded-md border border-black/40"
          />
        </div>
        <div className="flex ml-auto items-center gap-2">
          <FaUserCircle size={30} />
          <span>Nombre de Usuario</span>
        </div>
      </div>
      <div className="flex w-full h-full">{children}</div>
    </div>
  );
};

export default ModulesContainer;
