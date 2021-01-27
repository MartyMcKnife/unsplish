import React, { ReactElement } from "react";

interface Props {
  url: string;
  label: string;
}

export default function Image({ url, label }: Props): ReactElement {
  return (
    <img
      src={url}
      alt={label}
      className="transition duration-200 transform hover:-translate-y-1 hover:scale-110 ease-in-out rounded-lg shadow-md my-10"
    ></img>
  );
}
