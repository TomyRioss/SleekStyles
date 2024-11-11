import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className={styles.container}>
      {products.map((item) => (
        <div key={item.id} className={styles.productos}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.image} alt={item.title} />
          <div>
            <p>Price: {item.price} / 20% OFF!</p>
            <p>Rating: {item.rating.rate}</p>
          </div>
          <button>Comprar!</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
