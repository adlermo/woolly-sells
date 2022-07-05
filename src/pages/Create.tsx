import { styled } from '@mui/material';
import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../context/UserContext';
import { Product } from '../interfaces/product';

import productService from '../services/products';

const Create: React.FC = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const post = async (product: Product) => {
    return await productService.post('/products', product);
  };

  const Container = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: 20,
    margin: 20,
  }));

  const onSubmit: SubmitHandler<Product> = (data: Product) => {
    console.log(data);
    post(data).then((res) => console.info(res));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="name"
          placeholder="Product's Name"
          {...register('name', { required: true })}
        />

        <input
          type="text"
          id="price"
          placeholder="Product's Price"
          {...register('price', { required: true })}
        />

        <input
          type="text"
          id="description"
          placeholder="Product's Description"
          {...register('description', { required: true })}
        />

        <input
          type="hidden"
          id="user_id"
          defaultValue={5}
          placeholder="Product's User Id Owner"
          {...register('user_id')}
        />

        <input type="submit" />
      </form>
    </Container>
  );
};

export default Create;
