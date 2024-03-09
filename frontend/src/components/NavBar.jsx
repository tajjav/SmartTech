import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const categories = ['TVs', 'Laptops', 'Smartphones', 'Headphones', 'Tablets'];

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(isOpen);
  };


  const DrawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {categories.map((text) => (
          <ListItem button key={text} component={Link} to={`/category/${text.toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          SmartTech
        </Typography>

        <Button color="inherit" component={Link} to="/">Home</Button>

        {/* Button for Drawer */}
        <Button color="inherit" onClick={toggleDrawer(true)}>Products</Button>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <DrawerList />
        </Drawer>

        <Button color="inherit" component={Link} to="/clearance">Clearance</Button>
        <Button color="inherit" component={Link} to="/about">About Us</Button>

        <IconButton aria-label="show cart items" color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          component={Link}
          to="/account"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
