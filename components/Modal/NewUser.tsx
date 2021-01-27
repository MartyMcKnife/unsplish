import React, { ReactElement, useState } from "react";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setUser: Dispatch<
    SetStateAction<{
      uuid?: string;
      pin?: string;
    }>
  >;
}

export default function Modal({ setUser }: Props): ReactElement {
  const [input, setInput] = useState("initialState");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("new user created");
    const user = { uuid: uuidv4(), pin: input };
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    setUser(user);
  };

  return (
    <div className="fixed z-10 modal w-full h-full top-0 left-0">
      <div className="bg-white rounded-lg absolute overflow-auto center p-4">
        <h1 className="font-semibold text-3xl">Welcome to Unplish!</h1>
        <h3 className="py-2">
          Unplish provides a place to bookmark photos, and view them in a
          gridlike layout.
        </h3>
        <h2 className="font-semibold text-2xl pb-2">
          Please provide a four digit pin to delete your photos
        </h2>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="1234"
            pattern="\d*"
            name="pin"
            maxLength={4}
            minLength={4}
            onChange={handleChange}
            required
          />
          <input
            className="rounded-md py-1 px-3 bg-green-500 shadow-sm"
            type="submit"
            value="Submit"
          ></input>
        </form>
      </div>
    </div>
  );
}
