import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

const UserGrid = ({ users }) => {
  return (
    <GridContainer>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </GridContainer>
  );
};

export default UserGrid;
