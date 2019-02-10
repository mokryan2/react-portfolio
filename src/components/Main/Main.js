import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact"

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
);

export default Main;
