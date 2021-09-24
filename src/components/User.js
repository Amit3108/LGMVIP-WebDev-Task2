import React from 'react';

import classes from './User.module.css';

const User = (props) => {
  return (
    <li className={classes.user}>
      <img src={props.userImg} alt={props.firstName}></img>
      <h2>{props.firstName}&nbsp;{props.lastName}</h2>
      <h3>{props.email}</h3>
    </li>
  );
};

export default User;