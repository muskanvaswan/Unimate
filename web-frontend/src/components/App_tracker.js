import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment >
  <CardMedia
    component="img"
    height="194"
      image="https://www.bestabile.com/wp-content/uploads/Calendar-w-alarm.jpg"
    alt="Image unable to load"
  />
    <CardContent sx={{ bgcolor: '#E7B5FF' }}>
      <Typography variant="h5" component="div" gutterBottom>
        APPLICATION TRACKER
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
        UPCOMING DEADLINE
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
       January 15, 2022
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
       11:55 PM
      </Typography>
    </CardContent>
    <CardActions sx={{ bgcolor: '#B86FC3'}}>
      <Button size="small" sx={{ color: 'black'}}>Find out</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card >{card}</Card>
    </Box>
  );
}
