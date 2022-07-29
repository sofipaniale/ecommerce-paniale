import React, {useState, useEffect} from 'react'
import ItemProduct from '../ItemProduct/ItemProduct';
import ItemCount from '../ItemCount/ItemCount';
import { productList } from '../../data/data';

const ItemList = () => {

    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(productList)}, 
        2000)
});
    useEffect(()=>{
        getProducts
            .then(async () => {
                const result = await getProducts;
                setProducts(result);
            })
            .catch((error) => {
                console.log('error al mostrar')
            })

    },[])



  return (

        <div>
            {products.map((product) => {
            return (
                <div key={product.id} className="item-list-conteiner">
                    <ItemProduct data={product}/>
                    <ItemCount initial={1} stock={product.stock}/>
                </div>)
                })}
        </div>

    );
};

export default ItemList
