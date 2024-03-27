import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box, List, ListItem, ListItemText, InputBase } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { useStore } from '../contexts/StoreContext';
import { Link as RouterLink } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { cart, updateQuantity, removeFromCart } = useStore();

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMenuOpen = Boolean(menuAnchorEl);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const navigate = useNavigate();
  const handleSearch = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/products/search?query=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
    
      navigate(`/search/${searchQuery}`); 
    } catch (error) {
      console.error('Error searching:', error);
    }
  };
  // //const DrawerList = () => (
  //   <div
  //     role="presentation"
  //     onClick={toggleDrawer(false)}
  //     onKeyDown={toggleDrawer(false)}
  //   >
  //     <List>
  //       {categories.map((text) => {
  //         const isActive = location.pathname === `/category/${text.toLowerCase()}`;
  //         return (
  //           <ListItem
  //             button
  //             key={text}
  //             component={Link}
  //             to={`/category/${text.toLowerCase()}`}
  //             style={{ color: isActive ? '#5e17eb' : 'inherit' }}
  //           >
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         );
  //       })}
  //     </List>
  //   </div>
  // );


  return (
    <AppBar position="static" style={{ background: 'white', color: '#6441a5', boxShadow: 'none' }}>
      <Toolbar>

      <RouterLink to="/" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/images/STLogo.png"   
            alt="Smart Technology"
            style={{  maxHeight: '100%', 
            width: '260px', 
            maxWidth: '320px', 
            position: 'relative',
            top: '-10px', 
            bottom: '-10px', 
           }}
          />
        </RouterLink>
        <Box sx={{ display: 'flex', flexGrow: 12 }}> 
          <Button color="inherit" component={Link} to="/" sx={{ fontWeight: 'bold', color: '#5e17eb' }}>Home</Button>
          <Button color="inherit" onClick={handleMenuOpen} sx={{ fontWeight: 'bold', color: '#5e17eb' }}>Products</Button>


          <Button color="inherit" component={Link} to="/clearance" sx={{ fontWeight: 'bold', color: '#5e17eb' }}>Clearance</Button>
          <Button color="inherit" component={Link} to="/about" sx={{ fontWeight: 'bold', color: '#5e17eb' }}>About Us</Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 0 }}>
         
        </Box>

        <Menu
          anchorEl={menuAnchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          {categories.map((category) => (
            <MenuItem
              key={category}
              onClick={handleMenuClose}
              component={Link}
              to={`/category/${category.toLowerCase()}`}
              sx={{ '&:hover': { color: '#800080' } }} 
            >
              {category}
            </MenuItem>
          ))}
        </Menu>
      
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
          />

        </Search>
        <IconButton aria-label="show cart items" color="inherit" component={Link} to="/cart">

          <ShoppingCartIcon /> {cart.length > 0 && cart.length}
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
