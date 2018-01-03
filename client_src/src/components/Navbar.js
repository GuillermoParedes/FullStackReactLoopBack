import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Logo</a>
            <a data-activates="main-menu" className="button-collapse show-on-small">
              <i className="fa fa-bars" />
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to='/'>
                  <i className="fa fa-users" />
                  Meetups
                </Link>
              </li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li>
                <Link to='/'> <i className="fa fa-meetup" /> Meetups </Link>
                <Link to='/meetups/add'> <i className="fa fa-plus" /> Add Meetup </Link>
                <Link to='/about'> <i className="fa fa-question-circle" /> About </Link>
                <Link to='/contact'> <i className="fa fa-users" /> Contact </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
