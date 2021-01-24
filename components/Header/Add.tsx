import React, { ReactElement } from "react";

export default function Add(): ReactElement {
  return (
    <div className="ml-2 md:ml-auto">
      <button className="py-1 px-3 md:px-4 md:py-3 bg-green-500 text-white rounded-md shadow-md">
        Add a photo
      </button>
    </div>
  );
}
