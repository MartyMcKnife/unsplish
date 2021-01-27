import React, { ReactElement, useState } from "react";

import Info from "./Info";
import Delete from "./../Modal/Delete";

interface Props {
  url: string;
  label: string;
}

export default function Image({ url, label }: Props): ReactElement {
  const [info, setInfo] = useState(false);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <div className="block mb-10">
      {show && <Delete show={setShow} label={label} />}
      <div
        className="relative transition duration-200 ease-in-out transform hover:scale-105 w-auto inline-block"
        onMouseEnter={() => setInfo(true)}
        onMouseLeave={() => setInfo(false)}
      >
        {" "}
        {info && <Info label={label} handleClick={handleClick} />}
        <img
          src={url}
          alt={label}
          className="z-0 hover:shadow-lg rounded-lg shadow-md"
        ></img>
      </div>
    </div>
  );
}
