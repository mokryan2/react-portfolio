import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import Main from "./components/Main/Main";
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Ryan C Mok" scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Ryan C Mok">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
