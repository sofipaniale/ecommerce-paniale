import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(0);
    const [total, setTotal] = useState(0);

    const addToCart = (product) => {
        //console.log(product)
        const isInCart = cart.find((productInCart) => productInCart.id === product.id);
        console.log(cart);
        
        if (isInCart) {
            const nuevo = cart.map((productInCart) => {
            if (productInCart.id === product.id) {
                return {
                    ...productInCart,
                    quantity: productInCart.quantity + product.quantity,
                };
            } else {
                return productInCart;
            }
            });
            setCart(nuevo);
        } else {
            setCart([...cart, product]);
        };
        setCounter(counter + product.quantity);
        console.log(counter);
        setTotal(total + parseInt(product.quantity)*parseFloat(product.price));
    };

    const clear = () => {
    setCart([]);
    setCounter(0);
    setTotal(0);
    };

    const removeFromCart = (id) => {
        const prod = cart.find((product) => product.id === id);
        setTotal(
          total - parseInt(prod.quantity) * parseFloat(prod.price)
        );
        setCounter(counter - prod.quantity);
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
    };
    
    return (
    <CartContext.Provider value={{counter, total, cart, addToCart, clear, removeFromCart }}>
        {children}
    </CartContext.Provider>
    );
};

export default CartProvider;