
import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ItemCount.css';


const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(1);
  
    const addItem = () => {
      if(count<stock)setCount(count + 1);
    }
  
    const restItem = () => {
      if(count>initial)setCount(count - 1);
    }
  
    return (
        <>
        <div className='item-count'>
            <Button variant="outlined" onClick={restItem}>-</Button>
            <Typography>{count}</Typography>
            <Button variant="outlined" size="medium" onClick={addItem}>+</Button>
        </div>
        </>
    );
    };
  
    export default ItemCount