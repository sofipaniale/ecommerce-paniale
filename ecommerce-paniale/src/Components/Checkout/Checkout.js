import React from 'react'
import React, { useContext } from "react";
import {CartContext} from "../../Context/CartContext"
import { Link } from "react-router-dom";
import CartContext from '../../Context/CartContext';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';


const Checkout = () => {

    const {counter, total, cart, addToCart, clear, removeFromCart } = useContext(CartContext);
  
  
    return counter === 0 ? (
        <>
          <div className="checkout-container">
              <Typography Typography variant="body2" className="text-link">
                -El carrito está vacío.-
              </Typography>
          </div>
        </>
      ) : (
        <>
            <Typography gutterBottom variant="h5" component="div">
                Tu Carrito
            </Typography>
            <div>
              {cart.map((product) => {
                return (
                <>
                  <div>
                    <img height="100px" src={product.img} />
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    {product.title}
                    {product.price}
                    {product.quantity}
                    Total:{parseInt(product.quantity) * parseFloat(product.price)}
                  </Typography>
                <div className="contenedorCant">
                    <Button onClick={() => removeFromCart(product.id)}>Eliminar</Button>
                </div>
                </>)}
                )};
            </div>
            <div>
              <div>
                ${total}
              </div>
                <Link to={`/products`}>
                  <Button>
                    Seguir Comprando
                  </Button>
                </Link>
                <Link to={'/'}>
                  <Button
                    onClick={() => clear()}
                    >
                    Confirmar Compra
                  </Button>
                </Link>
                <Button onClick={() => clear()}>
                  Vaciar Carrito
                </Button>
            </div> 
            );
              
        </>
        );
    };
    
export default Checkout