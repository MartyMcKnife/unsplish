import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ setSearch }: Props): ReactElement {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Search: ${e.target.value}`);
    if (e.target.value) {
      setSearch(e.target.value);
    } else {
      setSearch("");
    }
  };
  return (
    <div className="border-2 border-gray-200 rounded-md px-4 py-2 md:mx-20">
      <div className="absolute">
        <FontAwesomeIcon icon={faSearch} color={"grey"} />
      </div>

      <input
        type="text"
        placeholder="Search by name"
        className="ml-6 focus:outline-none md:pr-8"
        onChange={handleChange}
      />
    </div>
  );
}
