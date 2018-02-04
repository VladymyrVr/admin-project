import React, { Component } from 'react';

import './responsive.css'

//components
import LeftBar from './components/organisms/LeftBar';
import TopBar from "./components/organisms/TopBar";
import Main from "./Main";



class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <LeftBar/>
        <Main/>
      </div>
    );
  }
}

export default App;
