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
                            <Button colored>
                                <a href="https://chicago-community-skill-share.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="project-grid">
                    <Card shadow={5} style={{ minWidth: '300px', margin: 'auto' }}>
                        <CardTitle style={{ height: "176px", background: 'url(https://mokryan2.github.io/Portfolio/assets/images/portfolio/GIPHY.PNG) center / cover' }} />
                        <CardText>
                            <h5>Character Giphy</h5>
                            Who doesn't love a GIF? Click one of existing buttons, or add your own!
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mokryan2/Giphy" rel="noopener noreferrer" target="_blank">github</a>
                            </Button>
                            <Button colored>
                                <a href="https://mokryan2.github.io/Giphy/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '300px', margin: 'auto' }}>
                        <CardTitle style={{ height: "176px", background: 'url(https://mokryan2.github.io/Portfolio/assets/images/portfolio/Trivia.PNG) center / cover' }} />
                        <CardText>
                            <h5>Trivia Game</h5>
                            Think you know classic video games? Lets find out!
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mokryan2/TriviaGame" rel="noopener noreferrer" target="_blank">github</a>
                            </Button>
                            <Button colored>
                                <a href="https://mokryan2.github.io/TriviaGame/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '300px', margin: 'auto' }}>
                        <CardTitle style={{ height: "176px", background: 'url(https://mokryan2.github.io/Portfolio/assets/images/portfolio/Crystal.PNG) center / cover' }} />
                        <CardText>
                            <h5>Crystal Collector</h5>
                            Click the different crystals and try to reach the number!
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mokryan2/unit-4-game" rel="noopener noreferrer" target="_blank">github</a>
                            </Button>
                            <Button colored>
                                <a href="https://mokryan2.github.io/unit-4-game/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '300px', margin: 'auto' }}>
                        <CardTitle style={{ height: "176px", background: 'url(https://mokryan2.github.io/Portfolio/assets/images/portfolio/Psychic.PNG) center / cover' }} />
                        <CardText>
                            <h5>Psychic Letter Game</h5>
                            Try and guess what letter the computer is thinking of!
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mokryan2/Psychic-Game" rel="noopener noreferrer" target="_blank">github</a>
                            </Button>
                            <Button colored>
                                <a href="https://mokryan2.github.io/Psychic-Game/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="project-grid">
                    <Card shadow={5} style={{ minWidth: '350px', margin: 'auto' }}>
                        <CardTitle style={{ height: "176px", background: 'url(https://mokryan2.github.io/Portfolio/assets/images/portfolio/NPRScraper.PNG) center / cover' }} />
                        <CardText>
                            <h5>NPR News Scraper</h5>
                            Scrape news articles from the NPR website. You can save and leave notes on articles as well!
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mokryan2/MongoNewsScraper" rel="noopener noreferrer" target="_blank">github</a>
                            </Button>
                            <Button colored>
                                <a href="https://mokryan2-mongo-scraper.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="project-grid">
                    <Card shadow={5} style={{ minWidth: '350px', margin: 'auto' }}>
                        <CardTitle style={{ height: "176px", background: 'url(https://mokryan2.github.io/Portfolio/assets/images/tech/node.png) center / cover' }} />
                        <CardText>
                            <h5>AmazonesqueDB</h5>
                            Run a store with Node.JS! This requires MySQL to be properly run!
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mokryan2/AmazonesqueDB" rel="noopener noreferrer" target="_blank">github</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '350px', margin: 'auto' }}>
                        <CardTitle style={{ height: "176px", background: 'url(https://mokryan2.github.io/Portfolio/assets/images/tech/node.png) center / cover' }} />
                        <CardText>
                            <h5>LIRI-Node-App</h5>
                            It's like Siri, but it's LIRI! Follow the instructions to look up songs and movies!
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mokryan2/LIRI-node-app" rel="noopener noreferrer" target="_blank">github</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
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
                    <Tab>MongoDB/MySQL</Tab>
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
