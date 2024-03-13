import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" color="textSecondary">
              © Smart Tech 2024
            </Typography>
          </Grid>
          <Grid item container xs={12} sm={8} justifyContent="flex-end" spacing={2}>
            <Grid item>
              <Link href="#" variant="body2" color="textSecondary">
                Contact us
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color="textSecondary">
                Privacy Policy
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color="textSecondary">
                Shipping Policy
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color="textSecondary">
                Terms & Conditions
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
