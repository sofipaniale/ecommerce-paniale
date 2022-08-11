import React, { useEffect , useState} from "react";
import { productList } from "../../data/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListConteiner = () => {

    const [products, setProductData] = useState([])

    const {category} = useParams();

    const filtrados = productList.filter ((product => product.category === category));
    
    const getProducts = new Promise((resolve) => {
            setTimeout(()=>{
                if (category) {
                    resolve(filtrados);
                }else{
                    resolve(productList)
                }
            }, 2000);
    });

    useEffect(()=>{
         getProducts
              .then(async()=>{
                const result = await getProducts;
                setProductData(result)})
             .catch((error) =>{
                console.log('error al mostrar')}
             )
    },[filtrados]);


    return (
        <>
            <div className="item-list-container">
                <ItemList data={products}/>
            </div>
        </>
    );
};

export default ItemListConteiner;