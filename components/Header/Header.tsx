import React, { ReactElement } from "react";

import Logo from "./Logo";
import Add from "./Add";
import Search from "./Search";

export default function Header(): ReactElement {
  return (
    <header className="flex justify-start items-center mb-12">
      <Logo />
      <Search />
      <Add />
    </header>
  );
}
