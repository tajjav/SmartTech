import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

const ClearanceProductCard = ({ name, description, price, imageUrl, originalPrice, stock }) => {
  return (
    <Card sx={{ width: 220, maxWidth: '100%', boxShadow: 'lg', ml: '20px' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img src={imageUrl} loading="lazy" alt={name} />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{description}</Typography>
        <Link href="#" fontWeight="md" color="neutral" textColor="text.primary" overlay>
          {name}
        </Link>
        <Typography level="title-lg" sx={{ mt: 1, fontWeight: 'xl' }}>
          <span style={{ color: 'red' }}>Sale: {price}</span> {/* Change this line */}
          <Typography component="span" sx={{ textDecoration: 'line-through', ml: 1, color: 'text.secondary' }}>
            {originalPrice}
          </Typography>
        </Typography>
        {stock && (
          <Typography level="body-sm">
            {stock < 10 ? `Only ${stock} left!` : 'In Stock'}
          </Typography>
        )}
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="primary" size="lg">
          Add to Cart
        </Button>
      </CardOverflow>
    </Card>
  );
};

export default ClearanceProductCard;