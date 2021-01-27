import React, { ReactElement, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Masonry from "react-masonry-css";

import { IGet } from "../interfaces/api";

import Loading from "./helpers/Loading";
import Error from "./helpers/Error";

import Image from "./Image/Image";

const fetcher = (url) => axios.get(url).then((res) => res.data);

interface Props {
  uuid: string;
  newUser: boolean;
  pin: string;
}

export default function Masonary({ uuid, newUser, pin }: Props): ReactElement {
  const { data, error }: IGet =
    !newUser && useSWR(`/api/photo/${uuid}`, fetcher);

  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };
  if (error) {
    if (error.response) {
      return (
        <Error
          status={error.response.status}
          message={error.response.data.message}
        />
      );
    }
  }
  if (!data) {
    return <Loading />;
  }

  const items = data.map((image, i) => {
    return <Image url={image.url} label={image.label} key={i} />;
  });

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      columnClassName="masonry-column inline-block"
      className="masonry-grid"
    >
      {items}
    </Masonry>
  );
}
