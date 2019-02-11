import React, { Component } from "react";
import { Grid, Cell } from "react-mdl"
import "./Landing.css"

class Landing extends Component {
    render() {
        return (
            <div className="main">
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                    <img
                        src="/images/me.jpg"
                        alt="That's me!"
                        className="my-face"
                    />
                </Grid>
            </div>
        );
    };
}

export default Landing;
