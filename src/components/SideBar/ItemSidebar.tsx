import { cn } from "@/utils/cn";
import { useNavigate } from "react-router-dom";

const ItemSidebar = ({
  title,
  path,
  isActive,
}: {
  title: string;
  path: string;
  isActive: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        "flex w-full h-full px-5 cursor-pointer justify-center items-center",
        isActive
          ? "bg-greenActiveSideItem text-white"
          : "bg-greenSecondaryButton bg-opacity-10 text-black text-opacity-70"
      )}
      onClick={() => {
        navigate(path);
      }}
    >
      <div className="flex w-full justify-center">
        <div className="flex w-full h-10 items-center justify-start">
          <div className="flex  h-8 items-center pl-2">
            <span className="text-md">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSidebar;
