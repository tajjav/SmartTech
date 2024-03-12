import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} color="inherit" to="/">
          Home
        </Link>
        <Typography color="text.primary"> About Us</Typography>
      </Breadcrumbs>

      {/* AboutUs page content goes here */}
    </div>
  );
};

export default AboutUsPage;
