import { cn } from "@/utils/cn";
import { Spinner } from "@nextui-org/react";

interface ButtonCustomProps {
  title: string;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}
const ButtonCustom = ({
  title,
  onClick,
  className,
  isLoading,
  isDisabled,
  type = "button",
}: ButtonCustomProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "flex rounded-2xl text-white pt-1 pb-1 pl-6 pr-6 text-center items-center disabled:opacity-50",
        className
      )}
      disabled={isDisabled}
    >
      {title}
      {isLoading && <Spinner size="sm" color="success" />}
    </button>
  );
};

export default ButtonCustom;
