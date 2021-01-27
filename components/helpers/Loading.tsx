import Masonry from "react-masonry-css";
import React, { ReactElement } from "react";

import LoadingImage from "./LoadingImage";

export default function Loading(): ReactElement {
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        columnClassName="masonry-column inline-block"
        className="masonry-grid"
      >
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
        <LoadingImage />
      </Masonry>
    </>
  );
}
