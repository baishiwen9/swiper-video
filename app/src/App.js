import React, { Component } from 'react';
import {HashRouter } from 'react-router-dom';
import Layout from './component/TabBar/layout';
import Route from './component/TabBar/route';


class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  	}
  }

  componentDidMount(){
  }
  render() {
      return (
          <HashRouter>
              <div className="App">
                  <Layout/>
                  <div className="appContainer">
                      <Route/>
                  </div>
              </div>
          </HashRouter>
      )
  }
}

export default App;
