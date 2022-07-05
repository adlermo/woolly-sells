import React, { useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import { useAuth } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const context = useAuth();
  const [nav, setNav] = React.useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // Trying to get authentication event by context
  useEffect(() => {
    if (context) {
      console.info(`signed ${context.signed}`);
      console.info(`user ${context.user}`);
    }
  }, [context]);

  const navigateCreate = (event: React.MouseEvent<HTMLElement>) => {
    closeNav();
    navigate('products/create');
  };

  const navigateList = (): void => {
    closeNav();
    navigate('products');
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNav = (event: React.MouseEvent<HTMLElement>) => {
    setNav(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const closeNav = (): void => {
    setNav(null);
  };

  const handleLogout = (): void => {
    handleClose();
    context.Logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {context.signed && (
            <div>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleNav}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={nav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(nav)}
                onClose={closeNav}
              >
                <MenuItem onClick={navigateCreate}>Create Product</MenuItem>
                <MenuItem onClick={navigateList}>List Products</MenuItem>
              </Menu>
            </div>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Woolly-Sells - Your products manager
          </Typography>
          {context.signed && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
