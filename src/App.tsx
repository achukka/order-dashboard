import * as React from "react";
import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
} from "@react-firebase/auth";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import Authenticated from "./Authenticated";
import Anonymous from "./Anonymous";
import { firebaseConfig } from "./credentials";

const App = () => {
  return (
    <div>
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            background: "#ECEFF1",
          }}
        >
          <IfFirebaseAuthed>
            {() => <Authenticated config={firebaseConfig} />}
          </IfFirebaseAuthed>
          <IfFirebaseUnAuthed>{() => <Anonymous />}</IfFirebaseUnAuthed>
        </div>
      </FirebaseAuthProvider>
    </div>
  );
};

export default App;
