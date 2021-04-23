import * as React from "react";
import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
} from "@react-firebase/auth";

import firebase from "firebase/app";
import "firebase/auth";
import Authenticated from "./Autheticated";
import Anonymous from "./Anonymous";

const Auth = (props: any) => {
  return (
    <div>
      <FirebaseAuthProvider {...props.config} firebase={firebase}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            background: "#ECEFF1",
          }}
        >
          <IfFirebaseAuthed>{() => <Authenticated />}</IfFirebaseAuthed>
          <IfFirebaseUnAuthed>{() => <Anonymous />}</IfFirebaseUnAuthed>
        </div>
      </FirebaseAuthProvider>
    </div>
  );
};

export default Auth;
