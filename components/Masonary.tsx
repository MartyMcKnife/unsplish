import React, { ReactElement } from "react";
import useSWR from "swr";
import axios from "axios";
import Masonry from "react-masonry-css";

import { IGet } from "../interfaces/api";

import Loading from "./helpers/Loading";
import Error from "./helpers/Error";
import NoFiles from "./helpers/NoFiles";

import Image from "./Image/Image";

const fetcher = (url) => axios.get(url).then((res) => res.data);

interface Props {
  uuid: string;
  newUser: boolean;
  search: string;
}

export default function Masonary({
  uuid,
  newUser,
  search,
}: Props): ReactElement {
  let { data, error }: IGet =
    !newUser && useSWR(`/api/photo/${uuid}/${search}`, fetcher);

  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };
  if (error) {
    if (error.response) {
      return error.response.status === 404 ? (
        <NoFiles />
      ) : (
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

  data = data.reverse();
  const items = data.map((image, i) => {
    return <Image url={image.url} label={image.label} key={i} />;
  });

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto"
      columnClassName="md:pl-10 bg-clip-padding"
    >
      {items}
    </Masonry>
  );
}
