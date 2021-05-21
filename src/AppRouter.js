import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";

const AppRouter = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default AppRouter;
