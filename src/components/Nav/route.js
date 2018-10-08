import React from "react";
import App from "D:/0ffice/Javascript/Sessions/React/youtube-player-master/src/App";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Music from "../Categories/music";
import Islamic from "../Categories/islamic";
import Sports from "../Categories/sports";
import About from "../Categories/about";
import Home from "../Home/home";

const Router = () => (
    <BrowserRouter>

    <Switch>
            <Route exact path="/" component={App} />
            <Route path="/music" component={Music} />
            <Route path="/about" component={About} />
            <Route path="/sports" component={Sports} />
            <Route path="/islamic" component={Islamic} />
            <Route path="/home" component={Home} />

    </Switch>

    </BrowserRouter>
);
export default Router;
