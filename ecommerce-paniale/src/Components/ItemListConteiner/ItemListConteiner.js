import React, { useEffect , useState} from "react";
//import { productList } from "../../data/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query} from "@firebase/firestore";
import db from "../../FirebaseConfig";

const ItemListConteiner = () => {

    const [products, setProductData] = useState([])

    const {category} = useParams();

    const getProducts = async () => {
      const productCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productCollection);

      console.log(productSnapshot)
    }
    
   useEffect ( () => {  

    const queryCollection = collection(db,'products');
    
    if (category) {
        const queryFilter= query(queryCollection, where("category" , "==", category))
        getDocs (queryFilter)
        .then(res =>setProductData (res.docs.map(product =>({id: product.id, ...product.data()}))))
    }else{
    getDocs(queryCollection)
    .then(res =>setProductData (res.docs.map(product =>({id: product.id, ...product.data()}))))
    }
},[category])

    return (
        <>
            <div className="item-list-container">
                <ItemList data={products}/>
            </div>
        </>
    );
};

export default ItemListConteiner;