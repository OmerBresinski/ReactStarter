import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { ThemeProvider } from "theme";

const AppRouter = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </Provider>
    );
};

export default AppRouter;
