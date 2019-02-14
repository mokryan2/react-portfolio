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
                <div>
                    <Card shadow={5} style={{ minWidth: '350px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://mokryan2.github.io/Portfolio/assets/images/portfolio/Kirby.PNG) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Get Started</Button>
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

                <Grid className="project-grid">
                    <Cell col={12}>
                        {this.toggleSection()}
                    </Cell>
                </Grid>
            </div>
        );
    };
}

export default Projects;
