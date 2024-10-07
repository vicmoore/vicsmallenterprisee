import { createContext, useState, useEffect } from 'react';
import { databases } from '../appwriteconfig';

// @ts-ignore
const ProductContext = createContext();

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const addedToCart = (id: number) => {
    const updatedProduct = products.map((product: object) => {
      // @ts-ignore
      if (product.$id === id) {
        return { ...product, addedToCart: true };
      }

      return product;
    });

    // @ts-ignore
    setProducts(updatedProduct);
  };

  const removeFromCart = (id: number) => {
    const updatedProduct = products.map((product: object) => {
      // @ts-ignore
      if (product.$id === id) {
        return { ...product, addedToCart: false };
      }

      return product;
    });

    // @ts-ignore
    setProducts(updatedProduct);
  };

  const itemSold = (id: number) => {
    const updatedProduct = products.map((product: object) => {
      // @ts-ignore
      if (product.$id === id) {
        return { ...product, sold: true };
      }

      return product;
    });

    // @ts-ignore
    setProducts(updatedProduct);
  };

  useEffect(() => {
    const getProducts = databases.listDocuments(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_PRODUCT_COLLECTION_ID
    );

    getProducts.then(
      function (response) {
        const responseProducts = response.documents.map((product) => ({
          ...product,
          addedToCart: false,
          sold: false,
        }));

        // @ts-ignore
        setProducts(responseProducts);
      },
      function (error) {
        console.log(error);
      }
    );

    //get all orders from order database
    const getOrders = databases.listDocuments(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_ORDERS_COLLECTION_ID
    );

    getOrders.then(
      function (response) {
        // @ts-ignore
        setOrders(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        orders,
        addedToCart,
        removeFromCart,
        itemSold,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
