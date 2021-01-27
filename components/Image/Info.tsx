import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  label: string;
  handleClick: () => void;
}

export default function Info({ label, handleClick }: Props): ReactElement {
  return (
    <div className="absolute z-10 w-full modal bottom-0 right-0 rounded-lg">
      <div className="flex justify-between items-center py-2 px-4">
        <h2 className="text-white font-medium text-lg">{label}</h2>
        <FontAwesomeIcon
          icon={faTrash}
          size="2x"
          className="text-red-400 cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
