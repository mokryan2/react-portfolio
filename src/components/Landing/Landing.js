import React, { Component } from "react";
import { Grid, Cell } from "react-mdl"
import "./Landing.css"

class Landing extends Component {
    render() {
        return (
            <div className="main">
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                    <div className="crop">
                    <img
                        src="/images/me.jpg"
                        alt="That's me!"
                        className="my-face"
                    />
                    </div>

                    <div className="text-heading">
                        <h1>Full-Stack Web Developer</h1>
                    </div>
                </Grid>
            </div>
        );
    };
}

export default Landing;
