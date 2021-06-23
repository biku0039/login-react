import React from "react";
import "./App.css";
import routes from "./Route";
import { Route } from "react-router";

function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <div>
      <div>{routeComponents}</div>
    </div>
  );
}

export default App;
