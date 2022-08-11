import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { productList } from '../../data/data'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})

    const { id } = useParams()

    const filterById = () => {
        productList.filter( (product) => {
            if(product.id === id) {
                console.log("producto filtrado: ", product)
                setProductData(product) 
            }
        })
    }
    
    useEffect( () => {
        filterById()
    }, [id])

    
    return(
        <div className="container-item-detail">
            <ItemDetail data={productData}/>
        </div>
    )
}

export default ItemDetailContainer