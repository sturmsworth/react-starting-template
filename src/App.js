import React, { useContext, useEffect, useState } from "react";

// packages
import { Switch, Route } from "react-router-dom";

// routes
import * as ROUTES from "./routes/index";

// firebase config
import { auth } from "./utils/firebase";

// firebase api
import { createUserDocument } from "./utils/firebase-api";

// pages
import Homepage from "./pages/Homepage";

// components
import MyNav from "./components/MyNav";

// scss
import "./styles/App.scss";

// context
import { UserContext } from "./context/UserContext";

function App() {
  const [loading, setLoading] = useState(false);

  const { signCurrentUserIn, signCurrentUserOut } = useContext(UserContext);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          createUserDocument(user).onSnapshot((snapshot) => {
            signCurrentUserIn(snapshot.data());
            setLoading(false);
          });
        }
      } else {
        auth.signOut();
        signCurrentUserOut();
        setLoading(false);
      }
    });

    return;
  }, [signCurrentUserIn, signCurrentUserOut]);

  return (
    <div className="App">
      <MyNav />
      <Switch>
        <Route exact path={ROUTES.HOME} component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
