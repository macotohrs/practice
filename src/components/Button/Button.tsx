import React from "react";
import "./Button.css";

type Props = {
  children: React.ReactNode;
  bgColor?: "default" | "cancel" | "add" | "danger" | "move";
  size?: "base" | "sm" | "lg" | "roundWidth";
  round?: "round";
  handleClick?: (event?: any) => void;
  isDisabled?: boolean;
};

// type Props = {
//   children: React.ReactNode,
//   bgColor?: string,
//   size?: string,
//   round?: "round";
// };

const Button = ({
  children,
  bgColor = "default",
  size = "base",
  round,
  handleClick,
  isDisabled
}: Props) => {
  const buttonClassName = `btn ${bgColor} ${size} ${round ? "round" : ""}`;

  return (
    <button className={buttonClassName} onClick={handleClick} disabled={isDisabled} >
      {children}
    </button>
  );
};

export default Button;
