import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

const ProductCard = ({ name, description, price, imageUrl, stock }) => {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={imageUrl}
            loading="lazy"
            alt={name}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{description}</Typography>
        <Link
          href="#"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
        
        >
          {name}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            stock < 10 ? (
              <Chip component="span" size="sm" variant="soft" color="danger">
                Only {stock} left!
              </Chip>
            ) : (
              <Chip component="span" size="sm" variant="soft" color="success">
                In stock
              </Chip>
            )
          }
        >
          {price}
        </Typography>
        <Typography level="body-sm">
          {stock < 10 && `(Only ${stock} left in stock!)`}
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
};

export default ProductCard;
