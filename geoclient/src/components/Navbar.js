import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a class="navbar-brand" href="https://aryazhao.github.io/">ARYA ZHAO</a>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/GetLocation" className="nav-link">Get Geolocation</Link>
          </li>
          <li className="navbar-item">
          <Link to="/SearchDate" className="nav-link">Search by Date</Link>
          </li>
          <li className="navbar-item">
          <Link to="/SearchHistory" className="nav-link">Search History</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;