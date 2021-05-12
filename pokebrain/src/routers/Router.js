import React from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import PokedexScreen from "../screens/PokedexScreen/PokedexScreen";
import RegionsScreen from "../screens/RegionsScreen/RegionsScreen";


import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Home Screen */}
                <Route exact path="/" component={HomeScreen}/>
            </Switch>

            <Switch>
                {/* Pokedex Screen */}
                <Route exact path="/pokedex" component={PokedexScreen}/>
            </Switch>

            <Switch>
                {/* Pokemon detail Screen */}
                <Route exact path="/detail/:name" />
            </Switch>

            <Switch>
                {/* Regions Screen */}
                <Route exact path="/regions" component={RegionsScreen}/>
            </Switch>

        </BrowserRouter>
    );
};

export default Router;