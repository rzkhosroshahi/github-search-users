import React from 'react';
import { Icon } from 'react-fa';
import User from './User';
import '../cm-style/UserRender.css';

const UsersRender = ({ users, counts }) => (
  <div className="container">
    <p className="allUsers">
      <span>
        <Icon name="users" />
        All users: </span>
      {counts}
    </p>

    {
    users.map((m, id) => (
        <User
            key={id}
            url={m.html_url}
            img={m.avatar_url}
            userId={m.login} />
        ))
    }
  </div>
    );

export default UsersRender;
