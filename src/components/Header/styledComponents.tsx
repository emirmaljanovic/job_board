import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  background-color: #282c34;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  width: 100%;
`;

export const Logo = styled.img `
  width: 100px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2em;
`;