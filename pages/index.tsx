import Header from "../components/Header/Header";
import Masonary from "../components/Masonary";
import NewUser from "../components/Modal/NewUser";

import { user } from "../interfaces/user";

import React, { useState } from "react";

const IndexPage = () => {
  const [user, setUser] = useState<user>({});
  const [newUser, setnewUser] = useState(true);

  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    if (user && newUser) {
      setnewUser(false);
      setUser(JSON.parse(user));
    }
  }

  return (
    <>
      {console.log(newUser)}

      <div className={`mx-6 md:mx-24 my-10`}>
        {newUser && <NewUser setUser={setUser} />}
        <Header uuid={user.uuid} />
        <Masonary uuid={user.uuid} pin={user.pin} newUser={newUser} />
      </div>
    </>
  );
};

export default IndexPage;
