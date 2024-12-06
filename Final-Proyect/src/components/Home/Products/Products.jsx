import React, { useEffect, useState } from 'react';
import { db } from '../../../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Products = () => {
  const [products, setProducts] = useState([]);
  // Estado vacío para que almacene los productos de la petición luego.

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCol = collection(db, 'products');
        const productsDocs = await getDocs(productsCol);
        // Petición de los productos a la db

        const productsList = productsDocs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Obtenemos los productos y los mapeamos para obtener su información.

        setProducts(productsList);
        // Se añaden al estado.
      } catch (error) {
        console.log('Error fetching products', error);
      }
    };

    fetchProducts();
    // Se ejecuta una sola vez
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex-col justify-center text-center items-center mb-5 ">
        <h1 className="text-3xl font-medium  mb-6">☀ ¡Llegó el verano!☀</h1>
        <p> Junto a precios imeperdibles</p>
      </div>
      {products.length === 0 ? (
        <p className="text-center">Obteniendo productos...</p>
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
