import React from "react";

// packages
import { Switch, Route } from "react-router-dom";

// routes
import * as ROUTES from "../routes/index";

// pages
import Homepage from "../pages/Homepage";

// components
import MyNav from "../components/MyNav";

// scss
import "../styles/App.scss";

function App() {
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
