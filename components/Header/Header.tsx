import React, { ReactElement } from "react";

import Logo from "./Logo";
import Add from "./Add";
import Search from "./Search";

interface Props {
  uuid: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ uuid, setSearch }: Props): ReactElement {
  return (
    <header className="flex justify-start items-center mb-12">
      <Logo />
      <Search setSearch={setSearch} />
      <Add uuid={uuid} />
    </header>
  );
}
