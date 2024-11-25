import React, { useEffect, useState } from 'react';
import { db } from '../../../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Products = () => {
  const [products, setProducts] = useState([]);

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

        setProducts(productsList);
        console.log('Fetch exitoso', productsList);
      } catch (error) {
        console.log('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      {products.length === 0 ? (
        <p className="text-center">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <p className="text-gray-900 font-semibold">
                Price: ${product.price}
              </p>
              <p className="text-gray-600">Stock: {product.stock}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
