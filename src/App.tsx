import React from "react";
import Auth from "./Auth";
import { firebaseConfig } from "./credentials";

const NeverChangingDiv = () => {
  return <div> This div does not answer to firebase</div>;
};

const App = () => {
  return (
    <div>
      <NeverChangingDiv />
      <Auth config={firebaseConfig} />
    </div>
  );
};

export default App;
