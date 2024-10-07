import { createContext, useEffect, useState } from 'react';
interface CartContextType {
  cart: any[];
  setCart: (cart: any[]) => void;
  addToCart: (product: any) => void;
  removeItemFromCart: (id: number) => void;
}
// @ts-ignore
const CartContext = createContext<CartContextType | null>();

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    // @ts-ignore
    setCart((prevState) => [...prevState, product]);

    const updatedItems = [...cart, product];

    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const removeItemFromCart = (id: number) => {
    // @ts-ignore
    const newCart = cart.filter((item) => item.$id !== id);

    setCart(newCart);

    localStorage.setItem('cartItems', JSON.stringify(newCart));
  };

  useEffect(() => {
    //get items in local storage
    // @ts-ignore
    const items = JSON.parse(localStorage.getItem('cartItems'));

    if (!items) {
      setCart([]);
    } else {
      //set item in state
      setCart(items);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeItemFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
