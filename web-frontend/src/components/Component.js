import React from 'react'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from '@mui/material/Container';
import Menubar from './Menubar.js';
import Cards from './Cards.js'
const classes = {
  root: {
    // height: "100vh",
    // display: "flex",
    // justifyContent:"center",
    // alignItems: "center",
    // flexDirection: "column",
    // color:"#FFF",
  }
}

export default function Component() {
  return (
    <Container>
    <Menubar/>

    </Container>
  );
}
