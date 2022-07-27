import React from 'react'

const ItemProduct = ({data}) => {
    const {name,price,img,stock} = data
  return (
    <div className="card">
        <img src={img} width="200"/>
        <p>{name}</p>
        <span>${price}</span>
        <span>stock:{stock}</span>
        <button>AGREGAR AL CARRITO</button>
    </div>
  )
}

export default ItemProduct