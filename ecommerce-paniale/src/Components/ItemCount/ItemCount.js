
import React from 'react';
import { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ItemCount.css';
import CartContext from '../../Context/CartContext';


const ItemCount = ({stock, data}) => {

    const {name,price,img,stock,description} = data;
    const [count, setCount] = useState(1);
    const {addToCart} = useContext(CartContext)

    let disable= false;
  
    const addItem = () => {
      if(count<stock) {
        setCount(count + 1)}else{disable=true};
    }
    
    const restItem = () => {
      if(count>initial){setCount(count - 1)}else{disable=true};
    }

    const [Compra,setCompra ] = useState(false);
    
    const onAdd = () => {addToCart ({...data, quantity:count}),setCompra(true)}

  
    return (
        <> 
        <div className='item-count'>    
            <Button variant="outlined" onClick={restItem}  disabled={disable}>-</Button>
            <Typography>{count}</Typography>
            <Button variant="outlined" size="medium" onClick={addItem}  disabled={disable}>+</Button>
        </div>
        <div className='card-actions text-link'>
        {!Compra?
        <>
          <Button onClick={onAdd} className="button" size="medium">Agregar al carrito</Button>
        </>:
        <>
          <Link to={`/products`}><Button>Seguir Comprando</Button></Link>
          <Link to={`/cart`}><Button className='button'>Terminar Compra</Button></Link>
          </>}
        </div>
        </>
    );
    };
  
    export default ItemCount