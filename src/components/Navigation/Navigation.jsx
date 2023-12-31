import React from 'react';
import { StyledLink } from './Navigation.styled';

const Nav = () => {
  return (
    <>
      <StyledLink to="/">Home</StyledLink>

      <StyledLink to="/teachers">Teachers</StyledLink>

      <StyledLink to="/favorites">Favorites</StyledLink>

    </>
  );
};

export default Nav;
