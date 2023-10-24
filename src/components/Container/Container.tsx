import clsx from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

// @ts-ignore
export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={clsx("flex mx-auto w-full", className)}>{children}</div>
  );
}
