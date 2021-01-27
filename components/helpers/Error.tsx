import React, { ReactElement } from "react";

interface Props {
  status: number;
  message: string;
}

export default function Error({ status, message }: Props): ReactElement {
  return (
    <div className="absolute bottom-6 right-6 bg-red-300 p-4 rounded-lg shadow-md bounce-in-bottom">
      <h1>Looks like there was an error retrieving your images</h1>
      <h2>Status Code: {status}</h2>
      <h2>Message: {message}</h2>
    </div>
  );
}
