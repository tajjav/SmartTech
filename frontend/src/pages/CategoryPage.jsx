// src/pages/CategoryPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';


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
  );
};

export default CategoryPage;
