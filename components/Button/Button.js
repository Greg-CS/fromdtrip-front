import React from "react";

export const Button = ({ children, ...rest }) => {
  return (
    <button
      id="fire"
      className={`border-0 px-3 py-1 rounded cursor-pointer inline-flex items-center font-semibold ${
        rest.block ? "block w-full" : ""
      } 
      ${rest.white && !rest.outline ? "bg-white text-black" : ""}
      ${
        rest.white && rest.outline
          ? "bg-transparent text-white border-2 border-white"
          : ""
      }
      ${rest.black && !rest.outline ? "bg-black text-white" : ""}
      ${
        rest.black && rest.outline
          ? "bg-transparent text-black border-2 border-black"
          : ""
      }
      ${
        rest.primary && !rest.outline
          ? "bg-primary border-2 border-primary text-white"
          : ""
      }
      ${
        rest.primary && rest.outline
          ? `bg-transparent border-2 border-primary text-primary`
          : ""
      }
      ${rest.size === "L" ? "text-lg px-4 py-2" : ""}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};
