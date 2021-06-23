import React from "react";
import Login from "./Login/Login";
import Result from "./Result/Result";
import { BrowserRouter, Route } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/result" component={Result} />
    </div>
  </BrowserRouter>
);

export default routes;
