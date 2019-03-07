import React, { Component } from "react";
import { Grid, Cell } from "react-mdl"
import "./Landing.css"

class Landing extends Component {
    render() {
        return (
            <div className="main">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="crop">
                            <img
                                src="/images/resized.jpg"
                                alt="That's me!"
                                className="my-face"
                            />
                        </div>

                        <div className="text-heading">

                            <h1>Full-Stack Web Developer</h1>

                            <hr />

                            <p>HTML/CSS | Bootstrap | JavaScript/jQuery | Node.js | Express | MySQL/MongoDB/Sequelize | Handlebars | React</p>

                            <div className="links">
                                {/* Github link */}
                                <a href="https://github.com/mokryan2" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                {/* LinkedIn link */}
                                <a href="https://www.linkedin.com/in/ryan-mok-18602788/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    };
}

export default Landing;
