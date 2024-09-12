import { cn } from "@/utils/cn";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { IoIosSearch as Search } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  errors?: string;
  isEmptyField?: boolean;
  setCleanInput?: () => void;
  placeholder?: string;
  onHandleSearch?: (value: string) => void;
};

const SearchInput = forwardRef(
  (
    {
      className,
      errors,
      isEmptyField,
      setCleanInput,
      placeholder,
      onHandleSearch,
      ...props
    }: SearchInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onHandleSearch) {
        onHandleSearch(e.target.value);
      }
    };

    return (
      <div className="flex flex-col relative">
        <input
          ref={ref}
          {...props}
          className={cn(
            "border-b-1 border-greenText font-light focus:outline-none pl-8",
            className
          )}
          placeholder={placeholder || "Buscar..."}
          onChange={handleSearch}
        ></input>
        {isEmptyField ? (
          <Search className="absolute box-border top-[50%] right-1 translate-y-[-50%]" />
        ) : (
          <IoCloseOutline
            className="absolute box-border top-[50%] right-1 translate-y-[-50%] cursor-pointer"
            size={16}
            onClick={() => setCleanInput && setCleanInput()}
          />
        )}
        {errors && <p className="text-red-500 text-xs font-bold">{errors}</p>}
      </div>
    );
  }
);

export default SearchInput;
