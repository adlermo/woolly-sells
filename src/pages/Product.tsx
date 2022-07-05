import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material';

import React, { useEffect } from 'react';

interface State {
  name: string;
  description: string;
  price: number;
}

const Product: React.FC = () => {
  const [values, setValues] = React.useState({
    name: '',
    description: '',
    price: 0,
  });

  useEffect(() => {
    console.info(values);
  }, [values]);

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      //   setTimeout

      setValues({ ...values, [prop]: event.target.value });
    };

  const Container = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: 20,
    margin: 20,
  }));

  return (
    <Container>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Fill up your product's information
      </Typography>

      <Box display="flex" flexWrap="wrap" flexDirection="column">
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <TextField
            value={values.name}
            onInput={handleChange('name')}
            label="Product's Name"
            id="name"
            sx={{ m: 1, width: '40ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <TextField
            autoFocus={false}
            value={values.price}
            onInput={handleChange('price')}
            label="Price"
            id="price"
            sx={{ m: 1, width: '40ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </FormControl>

        <br />

        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <TextField
            value={values.description}
            onInput={handleChange('description')}
            label="Description"
            id="description"
            sx={{ m: 1, width: '40ch' }}
            multiline
            rows={4}
          />
        </FormControl>

        <Button>Submit</Button>
      </Box>
      <FormControl fullWidth sx={{ m: 1, width: '40ch' }}></FormControl>
    </Container>
  );
};

export default Product;
