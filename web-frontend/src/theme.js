import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#B86FC3',
    },
    primaryVariant: {
      main: '#E7B5FF',
    },
    secondary: {
      main: '#747373',
    },
    error: {
      main: red.A400,
    },
    background:{
      default: "#1B1B1B",
    }
  },

});

export default theme;
