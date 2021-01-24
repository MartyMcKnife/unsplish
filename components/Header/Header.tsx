import React, { ReactElement } from "react";

import Logo from "./Logo";
import Add from "./Add";
import Search from "./Search";

export default function Header(): ReactElement {
  return (
    <header className="flex justify-start items-center mx-6 md:mx-24 my-10">
      <Logo />
      <Search />
      <Add />
    </header>
  );
}
