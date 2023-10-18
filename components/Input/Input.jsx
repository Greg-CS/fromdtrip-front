import React from "react";

export const Input = (props) => {
  const { type, black, white, ...restProps } = props;

  return (
    <input
      className={`w-full p-2 mb-2 border-2 border-transparent rounded hover:border-[#05060f] hover:outline-none focus:outline-none focus:border-[#05060f] ${
        white ? "bg-white text-black" : ""
      }`}
      style={{transition: "border-color .3s cubic-bezier(.25,.01,.25,1) 0s, color .3s cubic-bezier(.25,.01,.25,1) 0s,background .2s cubic-bezier(.25,.01,.25,1) 0s"}}
      type={type}
      {...restProps}
    />
  );
};
