import React from "react";

export const Input = (props) => {
  const { type, purple, darkgreen, placeholder, ...restProps } = props;

  return (
    <input
      placeholder={placeholder}
      type={type}
      {...restProps}
    />
  );
};
