import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

const Anonymous = (props: any) => {
  return (
    <div>
      <h2>You're not signed in </h2>
      <button
        onClick={() => {
          firebase.app().auth().signInAnonymously();
        }}
      >
        Sign In Anonymously
      </button>
      <button
        onClick={() => {
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(googleAuthProvider);
        }}
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default Anonymous;
