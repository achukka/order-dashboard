import * as React from "react";
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
// TODO: https://github.com/rakannimer/react-firebase/blob/3264b0a62509c5f321713b10615ba2ce3ee50036/modules/tutorial-bookmarking-app/src/index.tsx
