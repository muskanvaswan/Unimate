import React from 'react'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from '@mui/material/Container';
import Menubar from './Menubar.js';
import Cards from './Cards.js'
import Harvard from './Harvard.js'


export default function Component() {
  const gradient = {
    backgroundImage: "url('/gradient.png')",
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100vh',
    width: '100%',
    backgroundSize: '150% 150%',
    backgroundRepeat:'no-repeat',
  }
  return (

    <Box sx={{position: 'relative'}}>
      <Box sx={gradient} />
      <Container>
        <Menubar/>
      </Container>

    </Box>

  );
}
