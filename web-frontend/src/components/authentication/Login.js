import React from 'react'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
//import axios, { setClientToken } from '../../shared/axios
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Component() {
  const router = useRouter();

  const [ username, setUsername ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  const [ error, setError ] = React.useState(false)
  const styles = {
    input: {
      m: 1
    }
  }

  const handleClick = () => {
    const payload = { username: username, password: password }
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/auth/login/',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : JSON.stringify(payload)
    };
    axios(config)
      .then(response => {
        const { token, user } = response.data;
        setError(false)
        console.log(token)
        // We set the returned token as the default authorization header
        //setClientToken(token)

        // Navigate to the home screen

      })
      .catch(error => setError(false));
        router.push('/')
  }

  return (

    <Container sx={{height: '100vh', width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <Typography variant='h1' align='center' color='#B86FC3'> <b> UNIMATE </b></Typography>
      <TextField
        variant="filled"
        InputProps={{
          sx: {color: 'white'}
        }}
        sx={styles.input}
        label="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={error}
      />
      <TextField
        variant="filled"
        InputProps={{
          sx: {color: 'white'}
        }}
        sx={styles.input}
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={error}
      />
      <Button variant="contained" onClick={handleClick}>Submit</Button>
    </Container>

  );
}
