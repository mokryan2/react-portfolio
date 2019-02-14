import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleSection() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <h1>These are for React!</h1>
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

                <section className="project-grid">
                    {this.toggleSection()}
                </section>
            </div>
        );
    };
}

export default Projects;
