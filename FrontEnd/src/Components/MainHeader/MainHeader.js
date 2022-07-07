import React from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const isLoggedIn = props.isAuthenticated;
  return (
    <header className={classes['main-header']}>
      {isLoggedIn ? <h1>User details</h1> : <h1>Login Form </h1>}  
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
      
    </header>
  );
};

export default MainHeader;