import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/main/Home";
import PrivateRoutes from "./components/routing/PrivateRoutes";
import "./css/main.css";
import store from "./store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <Fragment>
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoutes exact path="/" component={Home} />
            </Switch>
          </Router>
        </Fragment>
      </CookiesProvider>
    </Provider>
  );
}

export default App;
