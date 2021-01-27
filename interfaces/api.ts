import { AxiosError } from "axios";

//GET /photo/[user] and GET /photo/[user]/[label]

export interface IGet {
  data?: GetResp[];
  error?: AxiosError;
}

export interface GetResp {
  url: string;
  label: string;
}

//DEL /photo/[user]/[label]

export interface IDelete {
  data: DelResp;
  error?: AxiosError;
}

export interface DelResp {
  message: string;
}

//POST /photo

export interface IPost {
  data?: PostResp;
  error?: AxiosError;
}

export interface PostResp {
  message: string;
  contents: {
    url: string;
    label: string;
    user: string;
  };
}
