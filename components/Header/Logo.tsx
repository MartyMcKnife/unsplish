import React, { ReactElement } from "react";

export default function Logo(): ReactElement {
  return (
    <div className="w-12 h-full hidden md:block">
      <img src="/unplash_logo.svg" alt="Unsplish Logo" />
    </div>
  );
}
