import React, { ReactElement, SetStateAction, Dispatch, useState } from "react";
import axios, { AxiosError } from "axios";
import { mutate } from "swr";

import Error from "./../helpers/Error";

interface Props {
  uuid: string;
  close: Dispatch<SetStateAction<boolean>>;
}

export default function AddModal({ uuid, close }: Props): ReactElement {
  const [url, setUrl] = useState(
    "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
  );
  const [label, setLabel] = useState("placeholder");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`/api/photo/`, { user: uuid, url: url, label: label });
      close(false);
      mutate(`/api/photo/${uuid}/`);
      console.log("Successfully posted!");
    } catch (e) {
      close(false);
      if (e.response) {
        const err: AxiosError = e;
        return (
          <Error
            status={err.response.status}
            message={err.response.data.message}
          />
        );
      } else {
        console.error(e);
      }
    }
  };

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };
  const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <div className="fixed z-10 modal w-full h-full top-0 left-0">
      <div className="bg-white rounded-lg absolute overflow-auto center p-6 w-96">
        <h1 className="text-2xl font-semibold py-2">Add a new photo</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="label" className="text-xl">
            Label
          </label>{" "}
          <br />
          <input
            type="text"
            required
            placeholder="Suspendisse elit massa"
            name="label"
            onChange={handleLabelChange}
            className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 my-4"
          />
          <br />
          <label htmlFor="photo_url" className="text-xl">
            Photo url
          </label>
          <br />
          <input
            type="text"
            required
            placeholder="https://images.unsplash.com/photo-1523253112282-26697ead8398?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="photo_url"
            onChange={handleURLChange}
            className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 my-4"
          />
          <br />
          <div className="flex justify-end text-lg">
            <button onClick={() => close(false)} className="mx-4 text-gray-300">
              Cancel
            </button>
            <input
              type="submit"
              className="bg-green-500 text-white rounded-md py-2 px-3 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
