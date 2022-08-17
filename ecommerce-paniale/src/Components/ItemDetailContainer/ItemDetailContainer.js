import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { productList } from '../../data/data'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
    const [products, setProductData] = useState([])

    const {id} = useParams();

    const filtrados = productList.find ((product => product.id == id));
   
    console.log(filtrados);
    
    useEffect(()=>{

        const getProducts = new Promise((resolve) => {
            setTimeout(()=>{
                    resolve(filtrados)
                }
            , 2000);
    });
    
         getProducts
              .then(async()=>{
                const result = await getProducts;
                setProductData(result)})
             .catch((error) =>{
                console.log('error al mostrar')}
             )
    },[id]);
    
    return(
        <div className="container-item-detail">
            <ItemDetail data={products}/>
        </div>
    )
}

export default ItemDetailContainer