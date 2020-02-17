import React, { Component} from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import GetLocation from './components/GetLocation';
import SearchDate from './components/SearchDate';
import SearchHistory from './components/SearchHistory';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <Navbar />
          <br/>
          <Route path="/" exact component={GetLocation} />
          <Route path="/GetLocation" component={GetLocation} />
          <Route path="/SearchDate" component={SearchDate} />
          <Route path="/SearchHistory" component={SearchHistory} />
    </Router>
    );
  }
}

export default App;

