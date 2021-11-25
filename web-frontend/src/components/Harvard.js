import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import App_tracker from './App_tracker.js';
import Container from '@mui/material/Container';

export default function Harvard() {
  return (
<Container sx={{ minWidth : '90%', maxWidth: '90%',  paddingTop: '7%' ,  minHeight : '25%', maxHeight: '25%'}}>

<Box sx={{color: 'primary'}}>
  <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Button sx={{width: '20%'}}>
        <img
          height="200"
          src="http://assets.stickpng.com/images/5842f68fa6515b1e0ad75b22.png"
          alt="Harvard logo"
        />
      </Button>
      <Box>
        <Typography variant="h1" component="div" color="white">
          Harvard University
        </Typography>
        <Typography gutterBottom variant="h4" color="white">
          Cambridge, Boston, US
        </Typography>
      </Box>
    </Box>
  <Box sx={{color: 'white', m: 3}}>

    <Typography variant="body1" color="white">
    Harvard University, oldest institution of higher learning in the United States (founded 1636)
    and one of the nation’s most prestigious. It is one of the Ivy League schools.
    The main university campus lies along the Charles River in Cambridge, Massachusetts,
    a few miles west of downtown Boston. Harvard’s total enrollment is about 23,000.
    Harvard’s history began when a college was established at New Towne,
    which was later renamed Cambridge for the English alma mater of some of the leading colonists.
    Classes began in the summer of 1638 with one master in a single frame house and a “college yard.”
    Harvard was named for a Puritan minister, John Harvard,
    who left the college his books and half of his estate.
    </Typography>
  </Box>
</Box>



<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="flex-end"
  sx={{marginTop: '5%',  paddingBottom: '7%'}}
>
  <Grid item xs ={4} >
  <Card sx={{minHeight: 150, maxHeight: 150 , bgcolor: "#747373" ,color:"#E7B5FF" }} >
      <CardContent style ={{alignItems:"center"}}>
         <Typography variant="h5" component="div" sx={{ color: '#E7B5FF'}}  gutterBottom>
           Compatibility :
         </Typography>
         <Typography variant="h3" component="div" sx={{ color: 'white'}}>
           98%
         </Typography>
      </CardContent>
  </Card>
  </Grid>

  <Grid item xs ={4} >
  <Card sx={{ minHeight: 150, maxHeight: 150 , bgcolor: "#747373" ,color:"#E7B5FF" }} >
      <CardContent style ={{alignItems:"center"}}>
         <Typography variant="h5" component="div" sx={{ color: '#E7B5FF'}}  gutterBottom>
           Possibility :
         </Typography>
         <Typography variant="h3" component="div" sx={{ color: 'white'}}>
           0.05%
         </Typography>
      </CardContent>
  </Card>
  </Grid>

  <Grid item xs ={4} >
  <Card sx={{ minHeight: 150, maxHeight: 150 , bgcolor: "#747373" ,color:"#E7B5FF" }} >
      <CardContent style ={{alignItems:"center"}}>
         <Typography variant="h4" component="div" sx={{ color: '#E7B5FF'}}  gutterBottom>
           Dream
         </Typography>
      </CardContent>
  </Card>
  </Grid>

</Grid>

  </Container>


  );
}
