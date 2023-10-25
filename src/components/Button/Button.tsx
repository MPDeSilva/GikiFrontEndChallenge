import clsx from "clsx";
import React from "react";

interface Button {
  className?: string;
  label: string;
  onClick?: () => void;
}

const Button: React.FC<Button> = ({ className, label, onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={clsx(
        "flex items-center px-8 rounded-full lg:h-16 md:h-12 h-10 cursor-pointer bg-[#5f2b68] hover:scale-[1.01] hover:animate-pulse text-white lg:text-3xl md:text-xl sm:text-md font-medium",
        className
      )}
    >
      {label}
    </div>
  );
};

export default Button;
