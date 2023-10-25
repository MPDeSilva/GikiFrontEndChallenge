import clsx from "clsx";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";

interface StatBlockProps {
  className?: string;
  size?: "small" | "large";
  heading: string;
  amount: number;
  unit: string;
  subHeading: string;
}

const StatBlock: React.FC<StatBlockProps> = ({
  className,
  size,
  heading,
  amount,
  unit,
  subHeading,
}) => {
  return (
    <div
      id="stat-block"
      className={clsx(
        "flex flex-col mx-auto justify-center items-center text-center md:space-y-2",
        className
      )}
    >
      <p
        className={clsx(
          "text-[#c44170]",
          size === "large" && "md:text-4xl text-xl",
          size === "small" && "md:text-2xl text-lg w-8/12",
          "font-bold"
        )}
      >
        {heading}
      </p>
      <p
        className={clsx(
          "flex flex-row items-end text-[#5f2b68]",
          size === "large" && "md:text-7xl text-4xl",
          size === "small" && "md:text-5xl text-3xl",
          "font-bold"
        )}
      >
        <AnimatedNumbers
          data-testid="animated-number"
          animateToNumber={amount}
          includeComma={true}
          configs={(number, index) => {
            return { mass: 1, tension: 230 * (index + 1), friction: 140 };
          }}
        ></AnimatedNumbers>
        <span
          className={clsx(
            size === "large" && "md:text-3xl text-base ml-1",
            size === "small" && "md:text-xl text-sm ml-1"
          )}
        >
          {unit}
        </span>
      </p>
      <p
        className={clsx(
          "text-[#5f2b68]",
          size === "large" && "md:text-2xl sm:text-md",
          size === "small" && "md:text-xl sm:text-xs",
          "font-bold"
        )}
      >
        {subHeading}
      </p>
    </div>
  );
};

export default StatBlock;
