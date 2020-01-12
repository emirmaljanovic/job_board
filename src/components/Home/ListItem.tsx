import React from 'react';
import {
  Badge,
  ListItemTitle,
  StyledListLink,
  ListItemDescription
} from './styledComponents';

const ListItem = ({ jobId, title, description, employment_type }: { jobId: number, title: string, description: string, employment_type: string }) => (
  <li key={`job-item-${jobId}`}>
    <StyledListLink to={`/details/${jobId}`}>
      <ListItemTitle>{title}</ListItemTitle>
      <ListItemDescription title={description}>
        {description}
      </ListItemDescription>
      <Badge>{employment_type}</Badge>
    </StyledListLink>
  </li>
);

export default ListItem;