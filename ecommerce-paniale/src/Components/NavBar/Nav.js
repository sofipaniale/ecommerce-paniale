import './Nav.css'
import logo from './logocm.png'
import instagram from './instagram.png'
import wspp from './wspp.png'
import CartWidget from '../Cartwidget/CartWidget'


export default function Nav(){
    return (
        <>
  <nav id="nav" className="nav_inline">   
    <div className='img-div'>
    <img src={logo} alt="logo" style={{height:100, width:100}}/>
    <h1>CAMI MAKE UP</h1>
    </div>
                
    <ul className="menu_inline">
            
        <li><a className="menu_item" href="index.html">INICIO</a></li>
        <li><a className="menu_item" href="html/galeria.html">GALERIA</a></li>
        <li className='menu_desplegable'>
            <a className="menu_item" href="html/productos.html">PRODUCTOS</a>
            <ul>OJOS</ul>
            <ul>BOCA</ul>
            <ul>CEJAS</ul>
        
        </li>
        <li><a className="menu_item" href="html/servicios.html">SERVICIOS</a></li>
        <li><a className="menu_item" href="html/contacto.html">CONTACTO</a></li> 
            
        <div><a href="#"><img src={instagram} alt="instagram" style={{height:30, width:30}}/></a></div>   
        <div><a href="#"><img src={wspp} alt="whatsapp" style={{height:30, width:30}}/></a></div>
        <CartWidget />    
            
    </ul>
</nav>
   </> );}
