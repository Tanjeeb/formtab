import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Setting from './component/Setting'
import Form from './component/Form'
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Setting}/>
                    <Route exact path="/form" component={Form}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
