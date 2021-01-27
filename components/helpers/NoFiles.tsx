import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";

export default function NoFiles(): ReactElement {
  return (
    <div className="absolute center">
      <div className="flex justify-center pb-8">
        <FontAwesomeIcon icon={faPhotoVideo} size="6x" color="grey" />
      </div>

      <h2 className="text-lg font-light text-center">
        Darn. Looks like you haven't uploaded any photos yet <br />
        You can do so by clicking <i>Add Photo</i> on the top left
      </h2>
    </div>
  );
}
