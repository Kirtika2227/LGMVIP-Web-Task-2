
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #9E9FA5;
  padding: 10px;
  color: white ;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandName = styled.h1`
  margin: 0;
`;

const Navbar = ({ onGetUsersClick }) => {
  return (
    <NavbarContainer>
      <BrandName>Brand Name</BrandName>
      <button onClick={onGetUsersClick}>Get Users</button>
    </NavbarContainer>
  );
};

export default Navbar;
