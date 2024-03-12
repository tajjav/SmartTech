import React from 'react';
import ProductCard from '../components/ProductCard';
import { Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';


// Carousel items data, just the images
const carouselItems = [
//  {
    //type: 'iframe', // Indicating this item is an iframe
   // src: "https://www.canva.com/design/DAF_PiEhPI4/6ZmxnlWI5xzbbcQFrLFeCg/view?embed", // iframe source URL
   // link: "https://www.canva.com/design/DAF_PiEhPI4/6ZmxnlWI5xzbbcQFrLFeCg/view?utm_content=DAF_PiEhPI4&utm_campaign=designshare&utm_medium=embeds&utm_source=link", // Link for iframe content
    
 // },
  {
    imageUrl: '/images/TV.png',
  },
  {
      imageUrl:'/images/Laptop.jpg',
  },
  {
    imageUrl: '/images/Headphones.png',
  },
  {
    imageUrl: '/images/Smartphone1.jpg',
  },
  {
    imageUrl: '/images/Tablet1.png',
  },
];
  
function CarouselItem(props) {
  if (props.type === 'iframe') {
    // Rendering iframe
    return (
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', 
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
        margin: '1.6em 0 0.9em 0',
      }}>
        <iframe
          loading="lazy"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0,
          }}
          src={props.src}
          allowFullScreen
          allow="fullscreen"
        ></iframe>
        <a href={props.link} target="_blank" rel="noopener" style={{ display: 'block', textAlign: 'center', marginTop: '0.5em' }}>
          Design by {props.designBy}
        </a>
      </div>
    );
  } else {
    // Rendering image as before
    return (
      <Paper
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '300px',
          width: '100%',
          margin: 'auto',
        }}
        elevation={0}
      />
    );
  }
}


const mockProducts = [
  { id: 1, name: 'Smart TV', description: 'A high-quality smart TV', price: '$999', imageUrl: '/images/TV.png' },
  { id: 2, name: 'Laptop', description: 'A powerful laptop for professionals', price: '$1499', imageUrl: '/images/Laptop.jpg' },
  { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: '$299', imageUrl: '/images/Headphones.png' },
  { id: 4, name: 'SmartPhones', description: 'Experience next-gen photography with our best smartphone camera.', price: '$199', imageUrl: '/images/Smartphone1.jpg' },
  { id: 5, name: 'Tablets', description: 'A powerful tablet with a stunning display', price: '$299', imageUrl: '/images/Tablet1.png' },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel>
        {carouselItems.map((item, i) => (
          <CarouselItem key={i} {...item} />
        ))}
      </Carousel>
      <Grid container spacing={2}>
        {mockProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
