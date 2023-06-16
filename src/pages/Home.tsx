import React from "react";
import { getAuth, signOut } from "firebase/auth";

interface myProps {}
const Home = (props: myProps) => {
  const auth = getAuth();

  return (
    <div>
      <p>Home protected by firebase</p>
      <button onClick={() => signOut(auth)}>Sign out of FIREBASE</button>
    </div>
  );
};

export default Home;
