import React, { Component } from 'react';

//components
import LeftBar from './components/organisms/LeftBar';
import TopBar from "./components/organisms/TopBar";
import Users from "./components/pages/Users";


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <LeftBar/>
        <Users/>
      </div>
    );
  }
}

export default App;
