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
              <a href="/">Resume</a>
              <a href="/">About Me</a>
              <a href="/">Projects</a>
              <a href="/">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Ryan C Mok">
            <Navigation>
              <a href="/">Resume</a>
              <a href="/">About Me</a>
              <a href="/">Projects</a>
              <a href="/">Contact</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
