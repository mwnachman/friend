import React from 'react';
import { IndexLink, Link } from 'react-router';
import './LandingView.scss';

export const LandingView = () => (
  <div>
    <h4>Landing Page Placeholder</h4>
    <Link to='/home' activeClassName='route--active'>
      UserHomePage
    </Link>
  </div>
);

export default LandingView;
