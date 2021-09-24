import React from 'react';

import User from './User';
import classes from './UsersList.module.css';

const UserList = (props) => {
  return (
    <ul className={classes['users-list']}>
      {props.users.map((user) => (
        <User
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          userImg={user.userImg}
        />
      ))}
    </ul>
  );
};

export default UserList;