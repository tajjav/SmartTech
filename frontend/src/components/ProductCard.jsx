import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

const ProductCard = ({ name, description, price, imageUrl, stock, clearance = false, clearancePrice = '', showOnMainPage = true }) => {
  // Render the card only if it's marked for the main products page or it's a clearance item
  if (!showOnMainPage && !clearance) {
    return null;
  }
  return (
    <Card sx={{ 
      width: 220, 
      maxWidth: '150%', 
      boxShadow: 'lg',
      ml:'20px'
    }}>
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

        {/* Check if the item is on clearance */}
        {clearance ? (
          <>
            {/* Display the original price struck through */}
            <Typography
              level="body-sm"
              sx={{ textDecoration: 'line-through', display: 'block' }}
            >
              {price} {/* Original price */}
            </Typography>
            {/* Display the clearance price */}
            <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: 'xl', color: 'danger.main' }}
            >
              {clearancePrice} <Chip component="span" size="sm" variant="soft" color="danger">Clearance</Chip>
            </Typography>
          </>
        ) : (
          /* For non-clearance items, just display the price as usual */
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
        )}

        {/* Additional note about stock for non-clearance items */}
        {!clearance && stock < 10 && (
          <Typography level="body-sm">
            `(Only ${stock} left in stock!)`
          </Typography>
        )}
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="primary" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
};

export default ProductCard;
