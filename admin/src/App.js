import React, { Component } from 'react';

//components
import LeftBar from './components/organisms/LeftBar';
import TopBar from "./components/organisms/TopBar";
import Workflow from "./components/pages/Workflow";


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <LeftBar/>
        <Workflow/>
      </div>
    );
  }
}

export default App;
