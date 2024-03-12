// src/pages/CategoryPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



const mockData = {
  tvs: [
    {
      id: 'tv1',
      name: 'Smart OLED TV',
      description: 'Experience true color with OLED technology',
      price: '$999',
      imageUrl: '/images/TV.png', 
    },
    {
      id: 'tv2',
      name: '4K HDR TV',
      description: '4K High Dynamic Range for stunning picture quality',
      price: '$1299',
      imageUrl: '/images/TV.png',
    },
    {
      id: 'tv3',
      name: 'Smart OLED TV',
      description: 'Experience true color with OLED technology',
      price: '$999',
      imageUrl: '/images/TV.png', 
    },
    {
      id: 'tv4',
      name: '4K HDR TV',
      description: '4K High Dynamic Range for stunning picture quality',
      price: '$1299',
      imageUrl: '/images/TV.png',
    },
    {
      id: 'tv5',
      name: 'Smart OLED TV',
      description: 'Experience true color with OLED technology',
      price: '$999',
      imageUrl: '/images/TV.png', 
    },
    {
      id: 'tv6',
      name: '4K HDR TV',
      description: '4K High Dynamic Range for stunning picture quality',
      price: '$1299',
      imageUrl: '/images/TV.png',
    },
    {
      id: 'tv7',
      name: 'Smart OLED TV',
      description: 'Experience true color with OLED technology',
      price: '$999',
      imageUrl: '/images/TV.png', 
    },
    {
      id: 'tv8',
      name: '4K HDR TV',
      description: '4K High Dynamic Range for stunning picture quality',
      price: '$1299',
      imageUrl: '/images/TV.png',
    },
    {
      id: 'tv9',
      name: 'Smart OLED TV',
      description: 'Experience true color with OLED technology',
      price: '$999',
      imageUrl: '/images/TV.png', 
    },
    {
      id: 'tv10',
      name: '4K HDR TV',
      description: '4K High Dynamic Range for stunning picture quality',
      price: '$1299',
      imageUrl: '/images/TV.png',
    },
    
  ],
  laptops: [
    {
      id: 'laptop1',
      name: 'Gaming Laptop',
      description: 'High-performance gaming laptop with top-of-the-line specs',
      price: '$1999',
      imageUrl:'/images/Laptop.jpg',
    },
    {
      id: 'laptop2',
      name: 'Ultrabook Laptop',
      description: 'Sleek ultrabook with all-day battery life',
      price: '$1499',
      imageUrl: '/images/Laptop.jpg',
    }, 
    {
      id: 'laptop3',
      name: 'Gaming Laptop',
      description: 'High-performance gaming laptop with top-of-the-line specs',
      price: '$1999',
      imageUrl:'/images/Laptop.jpg',
    },
    {
      id: 'laptop4',
      name: 'Ultrabook Laptop',
      description: 'Sleek ultrabook with all-day battery life',
      price: '$1499',
      imageUrl: '/images/Laptop.jpg',
    },
    {
      id: 'laptop5',
      name: 'Gaming Laptop',
      description: 'High-performance gaming laptop with top-of-the-line specs',
      price: '$1999',
      imageUrl:'/images/Laptop.jpg',
    },
    {
      id: 'laptop6',
      name: 'Ultrabook Laptop',
      description: 'Sleek ultrabook with all-day battery life',
      price: '$1499',
      imageUrl: '/images/Laptop.jpg',
    },
    {
      id: 'laptop7',
      name: 'Gaming Laptop',
      description: 'High-performance gaming laptop with top-of-the-line specs',
      price: '$1999',
      imageUrl:'/images/Laptop.jpg',
    },
    {
      id: 'laptop8',
      name: 'Ultrabook Laptop',
      description: 'Sleek ultrabook with all-day battery life',
      price: '$1499',
      imageUrl: '/images/Laptop.jpg',
    },
    {
      id: 'laptop9',
      name: 'Gaming Laptop',
      description: 'High-performance gaming laptop with top-of-the-line specs',
      price: '$1999',
      imageUrl:'/images/Laptop.jpg',
    },
    {
      id: 'laptop10',
      name: 'Ultrabook Laptop',
      description: 'Sleek ultrabook with all-day battery life',
      price: '$1499',
      imageUrl: '/images/Laptop.jpg',
    },
    
  ],
 
  headphones: [
    {
      id: 'headphone1',
      name: 'Noise Cancelling Headphones',
      description: 'Immerse yourself in sound with industry-leading noise cancellation.',
      price: '$299',
      imageUrl: '/images/Headphones.png',
    },
    {
      id: 'headphone2',
      name: 'Wireless Earbuds',
      description: 'True wireless earbuds with unparalleled sound quality.',
      price: '$199',
      imageUrl: '/images/Headphones.png',
    },
    {
      id: 'headphone3',
      name: 'Noise Cancelling Headphones',
      description: 'Immerse yourself in sound with industry-leading noise cancellation.',
      price: '$299',
      imageUrl: '/images/Headphones.png',
    },
    {
      id: 'headphone4',
      name: 'Wireless Earbuds',
      description: 'True wireless earbuds with unparalleled sound quality.',
      price: '$199',
      imageUrl: '/images/Headphones.png',
    },{
      id: 'headphone5',
      name: 'Noise Cancelling Headphones',
      description: 'Immerse yourself in sound with industry-leading noise cancellation.',
      price: '$299',
      imageUrl: '/images/Headphones.png',
    },
    {
      id: 'headphone6',
      name: 'Wireless Earbuds',
      description: 'True wireless earbuds with unparalleled sound quality.',
      price: '$199',
      imageUrl: '/images/Headphones.png',
    },{
      id: 'headphone7',
      name: 'Noise Cancelling Headphones',
      description: 'Immerse yourself in sound with industry-leading noise cancellation.',
      price: '$299',
      imageUrl: '/images/Headphones.png',
    },
    {
      id: 'headphone8',
      name: 'Wireless Earbuds',
      description: 'True wireless earbuds with unparalleled sound quality.',
      price: '$199',
      imageUrl: '/images/Headphones.png',
    },{
      id: 'headphone9',
      name: 'Noise Cancelling Headphones',
      description: 'Immerse yourself in sound with industry-leading noise cancellation.',
      price: '$299',
      imageUrl: '/images/Headphones.png',
    },
    {
      id: 'headphone10',
      name: 'Wireless Earbuds',
      description: 'True wireless earbuds with unparalleled sound quality.',
      price: '$199',
      imageUrl: '/images/Headphones.png',
    },
    ],
    
    smartphones: [
      {
        id: 'smartphone1',
        name: 'Smartphone X Pro',
        description: 'Experience next-gen photography with our best smartphone camera.',
        price: '$999',
        imageUrl: '/images/Smartphone1.jpg',
      },
      {
        id: 'smartphone2',
        name: 'Smartphone Z Fold',
        description: 'Futuristic design with a foldable screen.',
        price: '$1499',
        imageUrl: '/images/Smartphone1.jpg',
      }, 
      {
        id: 'smartphone3',
        name: 'Smartphone X Pro',
        description: 'Experience next-gen photography with our best smartphone camera.',
        price: '$999',
        imageUrl: '/images/Smartphone1.jpg',
      },
      {
        id: 'smartphone4',
        name: 'Smartphone Z Fold',
        description: 'Futuristic design with a foldable screen.',
        price: '$1499',
        imageUrl: '/images/Smartphone1.jpg',
      }, 
      {
        id: 'smartphone5',
        name: 'Smartphone X Pro',
        description: 'Experience next-gen photography with our best smartphone camera.',
        price: '$999',
        imageUrl: '/images/Smartphone1.jpg',
      },
      {
        id: 'smartphone6',
        name: 'Smartphone Z Fold',
        description: 'Futuristic design with a foldable screen.',
        price: '$1499',
        imageUrl: '/images/Smartphone1.jpg',
      }, 
      {
        id: 'smartphone7',
        name: 'Smartphone X Pro',
        description: 'Experience next-gen photography with our best smartphone camera.',
        price: '$999',
        imageUrl: '/images/Smartphone1.jpg',
      },
      {
        id: 'smartphone8',
        name: 'Smartphone Z Fold',
        description: 'Futuristic design with a foldable screen.',
        price: '$1499',
        imageUrl: '/images/Smartphone1.jpg',
      },
       {
        id: 'smartphone9',
        name: 'Smartphone X Pro',
        description: 'Experience next-gen photography with our best smartphone camera.',
        price: '$999',
        imageUrl: '/images/Smartphone1.jpg',
      },
      {
        id: 'smartphone10',
        name: 'Smartphone Z Fold',
        description: 'Futuristic design with a foldable screen.',
        price: '$1499',
        imageUrl: '/images/Smartphone1.jpg',
      },
    
    ],
    tablets: [
      {
        id: 'tablet1',
        name: 'Pro Tablet 11"',
        description: 'A powerful tablet with a stunning display.',
        price: '$799',
        imageUrl: '/images/Tablet1.png',
      },
      {
        id: 'tablet2',
        name: 'Tablet Lite 10"',
        description: 'Lightweight and perfect for entertainment on the go.',
        price: '$499',
        imageUrl: '/images/Tablet1.png',
      }, 
      {
        id: 'tablet3',
        name: 'Pro Tablet 11"',
        description: 'A powerful tablet with a stunning display.',
        price: '$799',
        imageUrl: '/images/Tablet1.png',
      },
      {
        id: 'tablet4',
        name: 'Tablet Lite 10"',
        description: 'Lightweight and perfect for entertainment on the go.',
        price: '$499',
        imageUrl: '/images/Tablet1.png',
      }, 
      {
        id: 'tablet5',
        name: 'Pro Tablet 11"',
        description: 'A powerful tablet with a stunning display.',
        price: '$799',
        imageUrl: '/images/Tablet1.png',
      },
      {
        id: 'tablet6',
        name: 'Tablet Lite 10"',
        description: 'Lightweight and perfect for entertainment on the go.',
        price: '$499',
        imageUrl: '/images/Tablet1.png',
      }, 
      {
        id: 'tablet7',
        name: 'Pro Tablet 11"',
        description: 'A powerful tablet with a stunning display.',
        price: '$799',
        imageUrl: '/images/Tablet1.png',
      },
      {
        id: 'tablet8',
        name: 'Tablet Lite 10"',
        description: 'Lightweight and perfect for entertainment on the go.',
        price: '$499',
        imageUrl: '/images/Tablet1.png',
      }, 
      {
        id: 'tablet9',
        name: 'Pro Tablet 11"',
        description: 'A powerful tablet with a stunning display.',
        price: '$799',
        imageUrl: '/images/Tablet1.png',
      },
      {
        id: 'tablet10',
        name: 'Tablet Lite 10"',
        description: 'Lightweight and perfect for entertainment on the go.',
        price: '$499',
        imageUrl: '/images/Tablet1.png',
      },
      
    ]
  };
  const CategoryPage = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = React.useState([]);

  

   React.useEffect(() => {
    
    setProducts(mockData[categoryId.toLowerCase()] || []);
  }, [categoryId]);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} color="inherit" to="/">
          Home
        </Link>
        <Link  color="inherit" to="/products">
          Products
        </Link>
        <Typography color="text.primary">{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</Typography>
      </Breadcrumbs>

    <div>
      <h1>Category: {categoryId}</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CategoryPage;
