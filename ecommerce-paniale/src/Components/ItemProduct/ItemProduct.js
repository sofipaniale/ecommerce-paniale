import React from 'react'
import { Link } from 'react-router-dom'

const ItemProduct = ({data}) => {
  const {name,price,img,stock,id} = data
  return (
    <div className="card">
        <Link to={`/productos/${id}`}>
           <img src={img} width="200"/>
           <p>{name}</p>
           <span>${price}</span>
           <span>stock:{stock}</span>
           <button>AGREGAR AL CARRITO</button>
        </Link>
    </div>
  )
}

export default ItemProduct