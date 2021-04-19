import React from "react";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";
import Profile from "./Autheticated";
import Anonymous from "./Anonymous";

const Auth = (props: any) => {
  return (
    <div>
      <FirebaseAuthProvider {...props.config} firebase={firebase}>
        <div>
          Hello <div>From Firebase Auth Provider Child</div>
          <FirebaseAuthConsumer>
            {({ isSignedIn }) => {
              if (isSignedIn === true) {
                return <Profile />;
              } else {
                return <Anonymous />;
              }
            }}
          </FirebaseAuthConsumer>
        </div>
        <div>Another div</div>
      </FirebaseAuthProvider>
    </div>
  );
};

export default Auth;
