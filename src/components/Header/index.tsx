import React, { FC } from 'react';
import logo from '../../logo.svg';
import {
  Logo,
  Title,
  StyledLink,
  Header as StyledHeader
} from './styledComponents';

const Header: FC = () => (
  <StyledHeader>
    <StyledLink to="/">
      <Logo src={logo} alt="logo" />
      <Title>Job board</Title>
    </StyledLink>
  </StyledHeader>
);

export default Header;