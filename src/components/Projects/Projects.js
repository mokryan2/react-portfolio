import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleSection() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-grid">
                    <Card shadow={5} style={{ minWidth: '350px', margin: 'auto' }}>
                        <CardTitle style={{ height: "176px", background: 'url(https://mokryan2.github.io/Portfolio/assets/images/portfolio/Kirby.PNG) center / cover' }} />
                        <CardText>
                            <h5>Kirby Memory Game</h5>
                            Kirby sure has a lot of powers...Think you can keep track of them all?
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mokryan2/Clicky-Game" rel="noopener noreferrer" target="_blank">github</a>
                            </Button>
                            <Button colored>
                                <a href="https://kirby-memory-game.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '350px', margin: 'auto' }}>
                        <CardTitle style={{ height: "176px", background: 'url(https://mokryan2.github.io/Portfolio/assets/images/portfolio/CCSS.PNG) center / cover' }} />
                        <CardText>
                            <h5>CCSS</h5>
                            Chicago's community can be difficult to maneuver, but it doesn't have to be!
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mokryan2/ccss" rel="noopener noreferrer" target="_blank">github</a>
                            </Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>These are for JavaScript/jQuery</h1>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>These are for MongoDB</h1>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div>
                    <h1>These are for Node.js</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="tabs">
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })}
                    ripple
                >
                    <Tab>React</Tab>
                    <Tab>JavaScript/jQuery</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Node.js</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="projects">
                            {this.toggleSection()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    };
}

export default Projects;
