import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box'; // Import Box component

const theme = createTheme({
  palette: {
    primary: {
      main: '#5e35b1',
    },
    secondary: {
      main: '#512da8',
    },
    error: {
      main: '#c2185b',
    },
    background: {
      default: '#ede7f6',
    },
    text: {
      primary: '#512da8',
      secondary: '#c2185b',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 700,
      color: '#5e35b1',
    },
    body1: {
      color: '#512da8',
    },
    subtitle1: {
      fontWeight: 700,
      color: '#5e35b1',
      fontSize: '1.1rem',
    },
  },
});

const AboutUsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link component={RouterLink} color="inherit" to="/">
            Home
          </Link>
          <Typography color="text.primary">About Us</Typography>
        </Breadcrumbs>
        
        {/* Wrap the content in a Box component with marginTop for spacing */}
        <Box marginTop={4}> {/* Adjust marginTop value as needed */}
          <Typography variant="h5" gutterBottom align="center">
            Welcome to SmartTech
          </Typography>

          <Typography variant="subtitle1" gutterBottom align="center">
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph align="center">
            SmartTech makes the latest tech accessible, enhancing your life with innovation.
          </Typography>

          <Typography variant="subtitle1" gutterBottom align="center">
            Why Choose Us
          </Typography>
          <Typography variant="body1" paragraph align="center">
            We offer innovative gadgets at competitive prices, with expert support.
          </Typography>

          <Typography variant="subtitle1" gutterBottom align="center">
            Innovation at Your Fingertips
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Our platform features live chat support, ensuring a seamless shopping experience.
          </Typography>

          <Typography variant="subtitle1" gutterBottom align="center">
            Join Our Community
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Discover the future of shopping with SmartTech, where technology meets convenience.
          </Typography>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default AboutUsPage;
