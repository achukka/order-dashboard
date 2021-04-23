import * as React from "react";
import { render } from "react-dom";
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

render(<App />, document.getElementById("root"));
