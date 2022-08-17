
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ItemCount.css';


const ItemCount = ({stock, data, initial}) => {


    const [count, setCount] = useState(1);

    let disable= false;
  
    const addItem = () => {
      if(count<stock) {
        setCount(count + 1)}else{disable=true};
    }
    
    const restItem = () => {
      if(count>initial){setCount(count - 1)}else{disable=true};
    }

    const [Compra,setCompra ] = useState(false);
    
    const onAdd = () => {setCompra(true)}
    //setCompra (true),
    //console.log("Producto desde itemCount: ");
    //console.log("cantidad desde itemCount: ", count);}
  
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