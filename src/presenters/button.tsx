import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      className={`mt-4 px-4 py-2 bg-red rounded text-center text-base font-medium leading-none text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
