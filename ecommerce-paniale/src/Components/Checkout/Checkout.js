import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { Button } from '@mui/material';
import IconButton  from '@mui/material/IconButton';
import DeleteIcon  from '@mui/icons-material/Delete';
import Modal from "../Modal/Modal";
import db from '../../FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css'

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

    const theme = createTheme({
      palette: {
        primary: {
          light: '#a7c0cd',
          main: '#78909c',
          dark: '#4b636e',
          contrastText: '#fff',
        },
      },
    });

    
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
        <ThemeProvider theme={theme}>
            <Typography gutterBottom variant="h5" component="div" className='text-link'>
                Tu Carrito
            </Typography>
            <div>
              {cart.map((product) => {
                return (
                <div className='list'>
                <div>
                    <img height="100px" alt='img-producto' src={product.img} />
                </div>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    <p>{product.name}</p>
                    <p>Precio: {product.price}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Total: {parseInt(product.quantity) * parseFloat(product.price)}</p>
                  </Typography>
                </div>
                <div className="contenedorCant">
                    <IconButton variant="contained" size="small" color="primary" onClick={() => removeFromCart(product.id)}>
                       <DeleteIcon/>
                    </IconButton>
                </div>
                </div>)}
                )}
            </div>
            <div>

              <div>
                <h3 className="text-link">
                  Total: ${total}
                </h3>
              </div>

                 <Button variant="contained" size="medium" color="primary"
                   onClick={() => {setShowModal(true)}}
                   >
                   Confirmar Compra
                 </Button>

                 <Link className='text-link' to={`/products`}>
                   <Button variant="contained" size="medium" color="primary">
                   Seguir Comprando
                   </Button>
                 </Link>

                 <Button variant="contained" size="medium" color="primary" onClick={() => clear()}>
                   Vaciar Carrito
                 </Button>

            </div> 

            {ShowModal &&
            <Modal close={() =>{setShowModal(false)}} title={'DATOS DE TU COMPRA'}>
              {sent ?(
            <>
            <h2 >Su orden se generó correctamente</h2>
            <p >n de compra:  {sent}</p>
            <Link to="/">
            <Button variant="contained" size="large" color="primary" onClick={() => clear()}>Volver al Home</Button>
            </Link>
            </>):(<>
              <form className="form" onSubmit={submitData}>
                <input type='text' name='name' placeholder='ingrese nombre' onChange={handleChange} value = {formData.name}/>
                <input type='email' name='email' placeholder='ingrese mail' onChange={handleChange} value = {formData.email}/>
                <input type='number' name='phone' placeholder='ingrese telefono' onChange={handleChange} value = {formData.phone}/>
                <Button type="submit" variant="contained" size="large" color="primary">CONFIRMAR</Button>
                <Button variant="contained" size="large" color="primary" onClick={() =>{setShowModal(false)}}>CANCELAR</Button>
              </form>
              </>)}
            </Modal>};
          </ThemeProvider>
          </>

        );

    };
    
export default Checkout