import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import App_tracker from './App_tracker.js';


export default function Recomm() {
  return(
<Grid item xs ={12}  item container direction="row" >

  <Grid item xs ={4} >
  <Card sx={{ minHeight: 290 , maxHeight: 290 , bgcolor: "#747373" ,color:"#E7B5FF" }} >
      <CardContent style ={{alignItems:"center"}}>
           <Button size="small" sx={{fontSize: 14, color: 'black'}}> Recommended Universities in Australia</Button>
         <Typography variant="h4" component="div" gutterBottom>
           Melbourne University
         </Typography>
         <Typography variant="h5" component="div" sx={{ color: '#E7B5FF'}}  gutterBottom>
           Compatibility :
         </Typography>
         <Typography variant="h3" component="div" sx={{ color: 'white'}}>
           90%
         </Typography>
      </CardContent>
  </Card>
  </Grid>

  <Grid item xs ={4}>
  <Card sx={{ minHeight: 290 , maxHeight: 290 , bgcolor: "#747373" ,color:"#E7B5FF" }}  >
      <CardContent style ={{alignItems:"center"}}>
           <Button size="small" sx={{fontSize: 14, color: 'black'}}> Recommended Universities in Germany</Button>
         <Typography variant="h4" component="div" gutterBottom>
           Heidelberg University
         </Typography>
         <Typography variant="h5" component="div" sx={{ color: '#E7B5FF'}}  gutterBottom>
           Compatibility :
         </Typography>
         <Typography variant="h3" component="div" sx={{ color: 'white'}}>
           87%
         </Typography>
      </CardContent>
  </Card>
  </Grid>

  <Grid item xs ={4} >
    <Card sx={{ minHeight: 290 , maxHeight: 290 , bgcolor: "#747373" ,color:"#E7B5FF" }}>
    <CardContent style ={{alignItems:"center"}}>
         <Button size="small" sx={{fontSize: 14, color: 'black'}}> Recommended Universities in USA</Button>
       <Typography variant="h4" component="div" gutterBottom>
         Massachusetts Institute of Technology
       </Typography>
       <Typography variant="h5" component="div" sx={{ color: '#E7B5FF'}}  gutterBottom>
         Compatibility :
       </Typography>
       <Typography variant="h3" component="div" sx={{ color: 'white'}}>
         82%
       </Typography>
    </CardContent>
    </Card>
  </Grid>

</Grid>

);
}
