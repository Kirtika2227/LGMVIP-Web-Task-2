import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
  ;

`;

const UserCard = ({ user }) => {
  return (
    <CardContainer>
      <img src={user.avatar} alt={user.first_name} />
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>Email: {user.email}</p>
    </CardContainer>
  );
};

export default UserCard;
