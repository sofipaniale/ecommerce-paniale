import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { doc, getDoc } from '@firebase/firestore'
import db from '../../FirebaseConfig'

const ItemDetailContainer = () => {
    const [products, setProductData] = useState([])

    const {id} = useParams();

    useEffect(()=>{

        const queryDoc = doc(db, "products", id)
        getDoc(queryDoc)
             .then(res=>setProductData({id: res.id, ...res.data()}))
        },[id])

    return(
        <div className="container-item-detail">
            <ItemDetail data={products}/>
        </div>
    )
}

export default ItemDetailContainer