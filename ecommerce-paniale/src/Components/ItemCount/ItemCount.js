
import React from 'react';
import { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ItemCount.css';
import { CartContext } from '../../Context/CartContext';
import { createTheme, ThemeProvider} from '@mui/material/styles';


const ItemCount = ({data}) => {

    const stock = data.stock;
    const [count, setCount] = useState(1);
    const {addToCart} = useContext(CartContext);

    let disable= false;
  
    const addItem = () => {
      if(count<stock) {
        setCount(count + 1)}else{disable=true};
    }
    
    const restItem = () => {
      if(count>1){setCount(count - 1)}else{disable=true};
    }

    const [Compra,setCompra ] = useState(false);
    
    const onAdd = () => {
      addToCart ({...data, quantity:count})
      setCompra(true)
    }

    const theme = createTheme({
      palette: {
        primary: {
          light: '#a7c0cd',
          main: '#78909c',
          dark: '#4b636e',
          contrastText: '#fff',
        },
      },
    });


  
    return (
        <> 
        <ThemeProvider theme={theme}> 
        <div className='item-count'>
            <Button variant="outlined" onClick={restItem}  disabled={disable}>-</Button>
            <Typography>{count}</Typography>
            <Button variant="outlined" size="medium" onClick={addItem}  disabled={disable}>+</Button>
        </div>
        <div className='card-actions text-link'>
        {!Compra?
        <>
          <Button onClick={onAdd} className="button" variant="contained" size="small" color="primary">Agregar al carrito</Button>
        </>:
        <>
          <Link to={`/products`}><Button variant="contained" size="small" color="primary" className='button'>Seguir Comprando</Button></Link>
          <Link to={`/cart`}><Button variant="contained" size="small" color="primary" className='button'>Terminar Compra</Button></Link>
          </>}
        </div>
        </ThemeProvider>
        </>
    );
    };
  
    export default ItemCount