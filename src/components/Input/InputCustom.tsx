import { cn } from "@/utils/cn";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

const InputCustom = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement> & {
      className?: string;
      errors?: string;
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const classError = props?.errors ? "border-red-500" : "";
    return (
      <div className="flex flex-col w-full">
        <input
          ref={ref}
          {...props}
          className={cn(
            "rounded-xl border-1 border-greenText pr-2 text-right xl:text-xs 3xl:text-sm focus:outline-none",
            props.className,
            classError
          )}
        ></input>
        {props.errors && (
          <p className="text-red-500 text-xs font-bold">{props.errors}</p>
        )}
      </div>
    );
  }
);

export default InputCustom;
