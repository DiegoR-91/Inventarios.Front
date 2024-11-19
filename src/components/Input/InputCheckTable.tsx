import { useRef } from "react";

const InputCheckTable = () => {
  const ref = useRef<HTMLInputElement>(null!);
  return (
    <input
      type="checkbox"
      ref={ref}
      className={" cursor-pointer accent-greenActiveSideItem"}
    />
  );
};

export default InputCheckTable;
