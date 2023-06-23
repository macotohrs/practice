import React from "react";
import "tailwindcss/tailwind.css";

type Props = {
  /** コメントがstorybookに反映される*/
  variant?: "bg-green-600" | "bg-yellow-400" | "bg-red-600";
};
// Light.tsxはスタイルを指定するところ
const Light = ({ variant = "bg-green-600" }: Props) => {
  return <div className={`w-10 h-10 ${variant} rounded-full`}></div>;
};

export default Light;
