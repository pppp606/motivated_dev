import React from "react";

export const Logo: React.FC = ({}) => {
  return (
    <h1 className="flex-shrink-0">
      <div className="inline-block relative w-6 h-7 mr-2">
        <svg
          className="w-6 top-2.5 absolute"
          viewBox="0 0 377 378"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M376.57 0.750122H61.9035L0.0701904 62.5835V335.417C0.0701904 358.425 0.0702076 377.25 0.0702076 377.25H314.737L376.57 315.417V0.750122Z"
            fill="#E7152D"
          />
        </svg>
      </div>
      <span className="text-xl inline-block pt-2">motivated.dev</span>
    </h1>
  );
};
