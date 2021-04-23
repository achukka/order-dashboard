import * as React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from "@material-ui/core";
import { getButtonStyleProps } from "./Common";

const Authenticated = (props: any) => {
  return (
    <div>
      <h2>You're signed in 🎉 </h2>
      <Button
        {...getButtonStyleProps()}
        onClick={async () => {
          await firebase.app().auth().signOut();
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default Authenticated;
