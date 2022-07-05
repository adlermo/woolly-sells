import { styled } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import React, { useEffect, useState } from 'react';
import productService from '../services/products';

import { Product } from '../interfaces/product';
import { Navigate } from 'react-router-dom';

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const Container = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: 20,
    margin: 20,
  }));

  const updateProduct = () => {
    return <Navigate to={'products/create'} />;
  };

  const deleteProduct = () => {
    console.info('Deleting product');
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await productService.get('/products', {
        params: { user_id: 5 },
      });

      setProducts(data);
    };

    fetchProducts().catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        My Products - Total ({products ? products.length : 1})
      </Typography>
      <Box>
        <List dense={true}>
          {products.map((p, i) => (
            <ListItem
              key={p.id_product.toString()}
              // value={product.id_product}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    onClick={updateProduct}
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={deleteProduct}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={p.name} secondary={p.description} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ProductsList;
