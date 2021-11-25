import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
    <Card sx={{bgcolor:'#B86FC340'}}>
      <CardMedia
        component="img"
        height="164"
        image="https://www.bestabile.com/wp-content/uploads/Calendar-w-alarm.jpg"
        alt="Image unable to load"
      />
      <CardContent>
        <Typography variant="h5" component="div" color="white"gutterBottom>
          APPLICATION TRACKER
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="white" gutterBottom>
          UPCOMING DEADLINE
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="white" gutterBottom>
         January 15, 2022
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="white" gutterBottom>
         11:55 PM
        </Typography>
      </CardContent>
    </Card>
);

export default function OutlinedCard() {
  return card
}
