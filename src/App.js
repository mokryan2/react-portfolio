import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import Main from "./components/Main/Main";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Ryan C Mok" scroll>
            <Navigation>
              <a href="/resume">Resume</a>
              <a href="/about">About Me</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Ryan C Mok">
            <Navigation>
              <a href="/resume">Resume</a>
              <a href="/about">About Me</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
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
