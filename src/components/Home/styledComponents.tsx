import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageBody = styled.section `
  display: flex;
  flex-flow: column;
  flex: 1;
  padding: 20px;
  width: 100%;
  max-width: 1400px;
  overflow-y: auto;
`;

export const StyledListLink = styled(Link) `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "title title"
    "description badge"
  ;
  grid-gap: 5px;
  text-decoration: none;
  line-height: 1.2;
  padding: 10px;
  color: #000;

  &:hover {
    background-color: #eaeaea;
  }
`;

export const ListItemTitle = styled.h3 `
  grid-area: title;
  font-size: 1.1em;
`;

export const ListItemDescription = styled.span `
  font-size: .9em;
  color: #4e4e4e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Badge = styled.span `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: #000;
  background-color: #d6d6d6;
  border-radius: 10px;
  font-size: 10px;
  grid-area: badge;
`;