import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { CardActionArea } from '@mui/material';

import SignButton from '../components/SignButton';

function Authenticate() {
  return (
    <Card sx={{ maxWidth: 450 }} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="../sheep_black.svg"
          alt="black sheep vector"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={'center'}
          >
            Welcome to Woolly-Sells
          </Typography>
          <Stack spacing={2} direction="column" textAlign={'center'}>
            {/* <SignButton text={'Sign In'} /> */}
            <SignButton />
            {/* <SignButton text={'Sign Up'} /> */}
            <SignButton />
            Don't have an account?
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Authenticate;