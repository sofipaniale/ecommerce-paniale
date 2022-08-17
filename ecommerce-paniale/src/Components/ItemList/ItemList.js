import React from 'react'
import ItemProduct from '../ItemProduct/ItemProduct';
import './ItemList.css'

const ItemList = ({data}) => {


  return (

        <div className='item-list'>
            {data.map((product) => {
            return (
                <div key={product.id} className="item-product">
                    <ItemProduct data={product} stock={product.stock}/>
                    
                </div>)
                })}
        </div>

    );
};

export default ItemList
