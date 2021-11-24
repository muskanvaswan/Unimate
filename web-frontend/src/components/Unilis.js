import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export default function PinnedSubheaderList() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: '#E7B5FF',
        bordercolor: 'red',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {[1,].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            {['Harvard', 'MIT', 'Purdue','Columbia'].map((item) => (
              <ListItem key={`item-${sectionId}`}>
                <ListItemText primary={`${item}`} />
              </ListItem>

            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
