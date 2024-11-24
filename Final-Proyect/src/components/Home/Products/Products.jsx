import React, { useEffect, useState } from 'react';
import { db } from '../../../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Products = () => {
  const [products, setProducts] = useState([]); // Estado inicial como array

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...');
        const productsCol = collection(db, 'products');
        const productsDocs = await getDocs(productsCol);

        console.log('Documents fetched:', productsDocs.docs.length);

        const productsList = productsDocs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('Products List:', productsList);

        setProducts(productsList); // Actualizar el estado con la lista de productos
        console.log('Fetch exitoso', productsList);
      } catch (error) {
        console.log('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} />
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
