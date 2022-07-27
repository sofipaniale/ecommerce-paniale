
import React from 'react';
import { useState } from 'react';


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
        <div>
            <button onClick={restItem}>-</button>
            <p>{count}</p>
            <button onClick={addItem}>+</button>
        </div>
        </>
    );
    };
  
    export default ItemCount