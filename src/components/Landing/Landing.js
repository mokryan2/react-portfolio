import React, { Component } from "react";
import { Grid, Cell } from "react-mdl"
import "./Landing.css"

class Landing extends Component {
    render() {
        return (
            <div className="main">
                <Grid className="landing-grid">
                <Cell col={12}></Cell>
                </Grid>
            </div>
        );
    };
}

export default Landing;
