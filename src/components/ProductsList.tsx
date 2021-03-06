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
import service from '../services/service';

import { Product } from '../interfaces/product';

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const Container = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: 20,
    margin: 20,
  }));

  const updateProduct = (e: any) => {
    console.log(e.target);
    console.info('Update product');
  };

  const deleteProduct = (e: any) => {
    console.log(e.target);
    console.info('Deleting product');
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await service.get('/products', {
        params: { user_id: 1 },
        // TODO change hard coded user_id by GoogleUserId
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
