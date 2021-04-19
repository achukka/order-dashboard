import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

const Profile = (props: any) => {
  return (
    <div>
      <h2>You're signed in 🎉 </h2>
      <button
        onClick={() => {
          firebase.app().auth().signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
