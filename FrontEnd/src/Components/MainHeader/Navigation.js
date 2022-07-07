import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
      {/* <div className={classes.header}>{!props.isLoggedIn ? <h1>Login Form</h1> : <h1>User Details</h1>}</div> */}

        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;