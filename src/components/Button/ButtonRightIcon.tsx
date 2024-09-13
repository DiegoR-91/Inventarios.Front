import { cn } from "@/utils/cn";

interface ButtonRightIconProps {
  onClick?: () => void;
  icon: React.ReactNode;
  name: string;
  classname?: string;
  disabled?: boolean;
}

const ButtonRightIcon = ({
  onClick,
  icon,
  name,
  classname,
  disabled,
}: ButtonRightIconProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex  pr-2 pl-2 rounded-xl items-center hover:cursor-pointer border-1 border-transparent xl:gap-1 3xl:gap-2 xl:pb-1 xl:pt-1 3xl:pb-2 3xl:pt-2",
        classname
      )}
      disabled={disabled}
    >
      <div>{name}</div>
      <div className="ml-auto">{icon}</div>
    </button>
  );
};

export default ButtonRightIcon;
