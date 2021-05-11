import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Home Screen */}
                <Route exact path="/" />
            </Switch>

            <Switch>
                {/* Pokedex Screen */}
                <Route exact path="/pokedex" />
            </Switch>

            <Switch>
                {/* Pokemon detail Screen */}
                <Route exact path="/detail/:name" />
            </Switch>

            <Switch>
                <div>Error 404 - Sorry, this page does not exist...</div>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;