import React from "react";
import Link from "next/link";

export const ButtonLink = (props) => {
  return (
    <Link {...props}>
        {props.children}
    </Link>
  );
};
