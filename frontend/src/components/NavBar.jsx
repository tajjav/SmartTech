import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, InputBase } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { useStore } from '../contexts/StoreContext';
import { Link as RouterLink } from 'react-router-dom';

const categories = ['TV', 'Laptops', 'Smartphones', 'Headphones', 'Tablets'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));





const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cart, updateQuantity, removeFromCart } = useStore();

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
        {categories.map((text) => {
          const isActive = location.pathname === `/category/${text.toLowerCase()}`;
          return (
            <ListItem 
              button 
              key={text} 
              component={Link} 
              to={`/category/${text.toLowerCase()}`}
              style={{ color: isActive ? '#5e17eb' : 'inherit' }} 
            >
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );


  return (
<AppBar position="static" style={{ background: 'white', color: '#6441a5', boxShadow: 'none' }}>
      <Toolbar>
        
  <Typography
  component={RouterLink}
  to="/"
  style={{
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 'bold',
    fontSize: '2.6rem', 
    lineHeight: '0.35', // Adjust the line height to control the spacing
    display: 'block', // Ensures that the typography takes up the full width

  }}
>
   Smart
  <br />
  <span style={{ fontSize: '1.3rem' }}> {/* Smaller font size for "Technology" */}
    Technology
  </span>
</Typography>

        <Button color="inherit" component={Link} to="/">Home</Button>

        {/* Button for Drawer */}
        <Button color="inherit" onClick={toggleDrawer(true)}>Products</Button>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <DrawerList />
        </Drawer>

        <Button color="inherit" component={Link} to="/clearance">Clearance</Button>
        <Button color="inherit" component={Link} to="/about">About Us</Button>
        
   {/* Search component inserted here */}
   <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <IconButton aria-label="show cart items" color="inherit" component={Link} to="/cart">
       
          <ShoppingCartIcon /> {cart.length> 0 && cart.length}
        </IconButton>
        
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          component={Link}
          to="/login"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
