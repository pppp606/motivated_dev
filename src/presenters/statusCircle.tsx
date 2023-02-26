import React from "react";

interface Props {
  status: "active" | "inactive" | "pending";
}

export const StatusCircle: React.FC<Props> = ({ status }) => {
  let cssClasses =
    "w-3 h-3 leading-none rounded-full text-center inline-block mr-4";
  if (status === "active") {
    cssClasses += " bg-red";
  } else {
    cssClasses += " bg-gray-300";
  }
  return <div className={cssClasses}></div>;
};
