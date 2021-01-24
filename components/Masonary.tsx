import React, { ReactElement, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { IGet } from "../interfaces/api";

const fetcher = (url) => axios.get(url).then((res) => res.data);

interface Props {
  uuid: string;
}

export default function Masonary({ uuid }: Props): ReactElement {
  const { data, error }: IGet = useSWR(`/api/${uuid}`, fetcher);

  return <div></div>;
}
