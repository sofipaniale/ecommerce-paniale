import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({data}) => {
    const {name,price,img,stock} = data
  return (
    <>
    <div className="card">
    <img src={img} width="200"/>
    <p>{name}</p>
    <span>${price}</span>
    <span>stock:{stock}</span>
    <ItemCount/>
    <button>AGREGAR AL CARRITO</button>
</div>
    </>
    
  )
}

export default ItemDetail