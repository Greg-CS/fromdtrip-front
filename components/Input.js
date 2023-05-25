import React from "react";

export const Input = (props) => {
  const { white, ...restProps } = props;

  return (
    <input
      className={`w-full p-2 mb-2 border-2 border-gray-300 rounded ${
        white ? "bg-white text-black" : ""
      }`}
      {...restProps}
    />
  );
};
