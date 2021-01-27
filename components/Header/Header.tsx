import React, { ReactElement } from "react";

import Logo from "./Logo";
import Add from "./Add";
import Search from "./Search";

interface Props {
  uuid: string;
}

export default function Header({ uuid }: Props): ReactElement {
  return (
    <header className="flex justify-start items-center mb-12">
      <Logo />
      <Search />
      <Add uuid={uuid} />
    </header>
  );
}
