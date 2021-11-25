import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
  <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 3}} >
    <Grid xs ={12} spacing={3} container direction="row" justifyContent="center" alignItems="center">

      <Grid item xs={4} >
        <Card sx={{ minHeight: 290 , maxHeight: 290 , bgcolor: "#74737340" ,color:"#E7B5FF" }} >
            <CardContent style ={{alignItems:"center"}}>
               <Typography variant="h4" component="div" gutterBottom>
                 Melbourne University
               </Typography>
               <Typography variant="h5" component="div" sx={{ color: 'lightgreen'}}  gutterBottom>
                 Compatibility :
               </Typography>
               <Typography variant="h3" component="div" sx={{ color: 'lightgreen'}}>
                 20.7%
               </Typography>
            </CardContent>
        </Card>
      </Grid>

      <Grid item xs ={4}>
      <Card sx={{ minHeight: 290 , maxHeight: 290 , bgcolor: "#74737340" ,color:"#E7B5FF" }}  >
          <CardContent style ={{alignItems:"center"}}>
             <Typography variant="h4" component="div" gutterBottom>
               Heidelberg University
             </Typography>
             <Typography variant="h5" component="div" sx={{ color: 'lightblue'}}  gutterBottom>
               Compatibility :
             </Typography>
             <Typography variant="h3" component="div" sx={{ color: 'lightblue'}}>
               25.2%
             </Typography>
          </CardContent>
      </Card>
      </Grid>

      <Grid item xs ={4} >
        <Card sx={{ minHeight: 290 , maxHeight: 290 , bgcolor: "#74737340" ,color:"#E7B5FF" }}>
        <CardContent style ={{alignItems:"center"}}>
           <Typography variant="h4" component="div" gutterBottom>
             Massachusetts Institute of Technology
           </Typography>
           <Typography variant="h5" component="div" sx={{ color: 'pink'}}  gutterBottom>
             Compatibility :
           </Typography>
           <Typography variant="h3" component="div" sx={{ color: 'pink'}}>
             35.8%
           </Typography>
        </CardContent>
    </Card>
  </Grid>

    </Grid>
  </Box>
);
}
