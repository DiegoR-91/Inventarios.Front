import { ReactNode } from "react";

const LayoutLogin = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-screen font-sans">{children}</div>
  );
};

export default LayoutLogin;
