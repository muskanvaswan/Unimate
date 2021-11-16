import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Unilis from './Unilis.js';
import App_tracker from './App_tracker.js';
import Recommends from './Recommends.js';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={3}>

    <Grid item xs ={4}>
    <Card sx={{bgcolor:'#B86FC3' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:'#E7B5FF' }} aria-label="your colleges">
            Uni
          </Avatar>
        }

        title="YOUR SELECTED UNIVERSITIES"
        subheader=""
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.acenet.edu/PublishingImages/Interior-Page-Heroes/2014-Loyola_Lake_Shore_Campus03.JPG?RenditionID=10"
        alt="Image unable to load"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <hr/>
        <Button size="small" sx={{ color: 'black'}}>Harvard University</Button>
        <hr/>
        <Button size="small" sx={{ color: 'black'}}>Massachusetts institute of technology</Button>
        <hr/>
        <Button size="small" sx={{ color: 'black'}}>Oxford University</Button>
          <hr/>
        <Button size="small" sx={{ color: 'black'}}>TU Munich</Button>
          <hr/>
        <Button size="small" sx={{ color: 'black'}}>ETH Zurich</Button>
          <hr/>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>


    <Grid item xs ={4}>
    <Card>
     <App_tracker/>
     </Card>
    </Grid>


    <Grid item xs ={4}>
    <Card sx={{bgcolor:'#B86FC3' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:'#E7B5FF' }} aria-label="your colleges">
            Uni
          </Avatar>
        }
          title="REMINDERS AND NOTIFICATIONS"
      />
      <CardMedia
        component="img"
        height="194"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrl7jET7Kps5Brg-qjJ5-XeYqndClG4Y1cbQ&usqp=CAU"
        alt="Image unable to load"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <hr/>
        <Button size="small" sx={{ color: 'black'}}>Yale University Application</Button>
        <hr/>
        <Button size="small" sx={{ color: 'black'}}>Revised application dates</Button>
        <hr/>
        <Button size="small" sx={{ color: 'black'}}>CIT Enrollment</Button>
        <hr/>
        <Button size="small" sx={{ color: 'black'}}>Document verification results</Button>
          <hr/>
        <Button size="small" sx={{ color: 'black'}}>Notes</Button>
          <hr/>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>




 <Recommends/>

</Grid>
  );
}
