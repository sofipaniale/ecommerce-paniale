import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import Modal from "../Modal/Modal";
import db from '../../FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {

    const {counter, total, cart, clear, removeFromCart } = useContext(CartContext);
    const [ShowModal,setShowModal] = useState(false);
    const [sent, setSent] = useState();
    const [order, setOrder] = useState({
      items: cart.map((p)=>{
        return{
          id:p.id,
          title:p.name,
          price:p.price,
          cant: p.quantity
        }
      } ),
      buyer: {},
      date: new Date().toLocaleString(),
      total: total
    })

    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
    })

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
      console.log({...formData, [e.target.name]: e.target.value})
      console.log(order);
    }
  
    const submitData = (e) =>{
      e.preventDefault();
      pushData({...order, buyer: formData})
      console.log(order)
    }
  
    const pushData = async (newOrder) => {
      const collectionOrder = collection(db, 'orders')
      const orderDoc = await addDoc(collectionOrder, newOrder)
      setSent(orderDoc.id);
    }

    
    return counter === 0 ? (
        <>
          <div className="checkout-container">
              <Typography Typography variant="body2" className="text-link">
                -El carrito está vacío.-
              </Typography>
          </div>
        </>
      ) : (
        <>
            <Typography gutterBottom variant="h5" component="div">
                Tu Carrito
            </Typography>
            <div>
              {cart.map((product) => {
                return (
                <>
                  <div>
                    <img height="100px" src={product.img} />
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    {product.title}
                    {product.price}
                    {product.quantity}
                    Total:{parseInt(product.quantity) * parseFloat(product.price)}
                  </Typography>
                <div className="contenedorCant">
                    <Button onClick={() => removeFromCart(product.id)}>Eliminar</Button>
                </div>
                </>)}
                )};
            </div>
            <div>
              <div>
                ${total}
              </div>
                <Link to={`/products`}>
                  <Button>
                    Seguir Comprando
                  </Button>
                </Link>

                  <Button
                    onClick={() => {setShowModal(true)}}
                    >
                    Confirmar Compra
                  </Button>

                <Button onClick={() => clear()}>
                  Vaciar Carrito
                </Button>
            </div> 

            {ShowModal &&
            <Modal close={() =>{setShowModal(false)}}>
              {sent ?(
            <>
            <h2 >Su orden se generó correctamente</h2>
            <p >n de compra:  {sent}</p>
            <Link to="/">
            <button onClick={() => clear()}>Volver al Home</button>
            </Link>
            </>):(<>
              <form className="form" onSubmit={submitData}>
                <input type='text' name='name' placeholder='ingrese nombre' onChange={handleChange} value = {formData.name}/>
                <input type='email' name='email' placeholder='ingrese mail' onChange={handleChange} value = {formData.email}/>
                <input type='number' name='phone' placeholder='ingrese telefono' onChange={handleChange} value = {formData.phone}/>
                <Button type="submit">ENVIAR</Button>
              </form>
              </>)}
            </Modal>};

          </>

        );

    };
    
export default Checkout