import React from 'react';
import Pagination from '../container/Pagination';
import UserList from './UserList';

const Content = (props) => {
  const { users, count, update, location } = props;
  if (!users) return null;

  return (
    <section id="main">
      <UserList users={users} counts={count} />
      <Pagination handleUpdate={update} location={location} allItems={count} />
    </section>
  );
};

export default Content;
