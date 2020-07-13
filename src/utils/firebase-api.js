import firebase from "firebase";
import { auth, firestore, storage } from "./firebase";

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// ******************************* USERS ****************************
// sign in
export const signInWithGoogle = () => {
  auth.signInWithRedirect(provider);
};

// sign out
export const enableSignOut = () => auth.signOut();

// create a user document
export const createUserDocument = (userAuth, additionalData) => {
  if (!userAuth) return;

  const { uid, displayName, email } = userAuth;
  const userRef = firestore.doc(`users/${email}`);

  userRef.get().then((snapshot) => {
    if (!snapshot.exists) {
      const createdAt = new Date();

      if (displayName) {
        const fName = displayName.split(" ")[0];
        const lName = displayName.split(" ")[1];

        userRef
          .set({
            fName,
            lName,
            email,
            createdAt,
            uid,
            ...additionalData,
          })
          .catch((err) => console.error(err));
      } else {
        userRef
          .set({
            fName: additionalData.fName,
            lName: additionalData.lname,
            email,
            createdAt,
            uid,
            ...additionalData,
          })
          .catch((err) => console.error(err));
      }
    }
  });

  return userRef;
};
