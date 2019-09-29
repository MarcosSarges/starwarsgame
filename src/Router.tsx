import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./pages/Main";
import Bg from "./components/Bg";

export default function MyRouters() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/start-game" component={Main} />
        <Redirect from="*" to="/start-game" />
      </Switch>
      <Bg />
    </BrowserRouter>
  );
}
