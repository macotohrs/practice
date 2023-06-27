import React from "react";
import "./Button.css";

type Props = {
  children: React.ReactNode;
  bgColor?: "default" | "cancel" | "add" | "danger";
  size?: "base" | "sm" | "lg" | "roundWidth";
  round?: "round";
  handleClick?: () => void;
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
}: Props) => {
  const buttonClassName = `btn ${bgColor} ${size} ${round ? "round" : ""}`;

  return (
    <button className={buttonClassName} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
