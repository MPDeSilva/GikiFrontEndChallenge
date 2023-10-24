import clsx from "clsx";
import React from "react";

interface BadgeProps {
  className?: string;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ className, text }) => {
  return (
    <div
      className={clsx(
        "flex flex-col mx-auto justify-center items-center md:my-20 my-10 px-8 md:py-4 py-2 rounded-full font-bold bg-[#ebd7ef] text-[#5f2b68] md:text-2xl text-lg",
        className
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
