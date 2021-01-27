import axios, { AxiosError } from "axios";
import React, { ReactElement, useState } from "react";
import { mutate } from "swr";

import { user } from "./../../interfaces/user";

import Error from "./../helpers/Error";

interface Props {
  show: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
}

export default function Delete({ show, label }: Props): ReactElement {
  const [input, setInput] = useState("");
  const [wrong, setWrong] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user: user = JSON.parse(localStorage.getItem("user"));
    if (user.pin === input) {
      try {
        await axios.delete(`/api/photo/${user.uuid}/${label}`);
        console.log("Sucessfully deleted!");
        show(false);
        mutate(`/api/photo/${user.uuid}/`);
      } catch (e) {
        show(false);
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
    } else {
      setWrong(true);
      setInput("");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="fixed z-10 modal w-full h-full top-0 left-0">
      <div className="bg-white rounded-lg absolute overflow-auto center p-4 text-center">
        <h1 className="font-semibold text-2xl pb-2">Are you sure?</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="pin" className="text-lg font-normal">
            Please enter your pin
          </label>
          <br />
          <input
            type="text"
            placeholder="****"
            pattern="\d*"
            name="pin"
            maxLength={4}
            minLength={4}
            onChange={handleChange}
            value={input}
            required
            className="my-2 text-center border-2 rounded-md"
          />
          <br />
          {wrong && (
            <h3 className="my-2 text-red-600">
              Incorrect pin. Please try again
            </h3>
          )}
          <div className="text-right text-xl">
            <button onClick={() => show(false)} className="pr-4">
              Cancel
            </button>
            <input
              type="submit"
              value="Delete"
              className="px-2 py-1 rounded-md bg-red-400 text-white font-semibold cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
