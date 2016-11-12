import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

export const Header = () => (
  <div className="header">

    <h1>Welcome to myNanny!</h1>

    <IndexLink to='/home' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/children' activeClassName='route--active'>
      Children
    </Link>
    {' · '}
    <Link to='/account' activeClassName='route--active'>
      Account
    </Link>

  </div>
); 

export default Header;
