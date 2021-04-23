import * as React from "react";
import firebase from "firebase/app";
import "firebase/auth";

import { State } from "react-powerplug";
import { Button } from "@material-ui/core";

const Anonymous = (props: any) => {
  return (
    <div>
      <State initial={{ isLoading: false, error: null }}>
        {({ state, setState }) => (
          <div
            style={{
              width: 600,
              height: 300,
              display: "flex",
              alignContent: "center",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <div>isLoading: {JSON.stringify(state.isLoading)}</div>
            <div>error: {JSON.stringify(state.error)}</div>
            <Button
              variant="contained"
              style={{
                width: 200,
                height: 80,
                alignSelf: "center",
                background: "#039BE5",
                color: "white",
              }}
              onClick={async () => {
                setState({ isLoading: true, error: null });
                await firebase.app().auth().signInAnonymously();
                setState({ isLoading: false, error: null });
              }}
            >
              Login Anonymously
            </Button>

            <Button
              style={{
                width: 200,
                height: 80,
                alignSelf: "center",
                background: "#039BE5",
                color: "white",
              }}
              onClick={async () => {
                try {
                  setState({ isLoading: true, error: null });
                  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                  firebase.auth().signInWithPopup(googleAuthProvider);
                } catch (error) {
                  setState({ isLoading: false, error: error });
                }
              }}
            >
              Login With Google
            </Button>
          </div>
        )}
      </State>
    </div>
  );
};

export default Anonymous;
