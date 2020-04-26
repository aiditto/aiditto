/*!

=========================================================
* Aid it to App
=========================================================

*/
import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";
import Navbar from "components/Navbars/Navbar";
import { createBrowserHistory } from "history";
import React, { Suspense } from "react";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers/rootReducer";
import LandingPage from "layouts/LandingPage";
import LoginPage from "views/Pages/LoginPage";
import RegisterPage from "views/Pages/RegisterPage";
import AdminPage from "layouts/admin/AdminPage";
import ProducersPage from "layouts/producers/ProducersPage";
import NewsPage from "layouts/news/NewsPage";
import AuthRoute from "components/AuthRoute";
import ErrorPage from "views/Pages/ErrorPage";
import NotificationContainer from "components/Notification/NotificationContainer";
import "./i18n";

const hist = createBrowserHistory();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
  return (
    <Suspense fallback="loading">
      <Provider store={store}>
        <Router history={hist}>
          <Navbar />
          <NotificationContainer />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/nyheter" component={NewsPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={RegisterPage} />
            <AuthRoute path="/admin" component={AdminPage} />
            <AuthRoute path="/producent" component={ProducersPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </Provider>
    </Suspense>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
