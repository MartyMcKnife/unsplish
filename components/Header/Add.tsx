import React, { ReactElement, useState } from "react";

import AddModal from "./../Modal/AddModal";

interface Props {
  uuid: string;
}

export default function Add({ uuid }: Props): ReactElement {
  const [add, setAdd] = useState(false);
  return (
    <div className="ml-2 md:ml-auto">
      {add && <AddModal uuid={uuid} close={setAdd} />}
      <button
        className="py-1 px-3 md:px-4 md:py-3 bg-green-500 text-white rounded-md shadow-md"
        onClick={() => setAdd(true)}
      >
        Add a photo
      </button>
    </div>
  );
}
