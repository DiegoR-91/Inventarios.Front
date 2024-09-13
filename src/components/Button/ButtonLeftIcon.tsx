interface ButtonLeftIconProps {
  onClick?: () => void;
  icon: React.ReactNode;
  name: string;
  classname?: string;
  disabled?: boolean;
}

const ButtonLeftIcon = ({
  onClick,
  icon,
  name,
  classname,
  disabled,
}: ButtonLeftIconProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex pt-1 pb-1 pr-4 pl-4 rounded-full items-center hover:cursor-pointer  ${classname}`}
    >
      <div className="mr-auto xl:pr-2 3xl:pr-4">{icon}</div>
      <div>{name}</div>
    </button>
  );
};

export default ButtonLeftIcon;
