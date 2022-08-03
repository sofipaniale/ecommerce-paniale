import './Nav.css'
import logo from './logocm.png'
import instagram from './instagram.png'
import wspp from './wspp.png'
import CartWidget from '../Cartwidget/CartWidget'
import { Link } from 'react-router-dom'


export default function Nav(){
    return (
        <>
  <nav id="nav" className="nav_inline">   
    <div className='img-div'>
    <img src={logo} alt="logo" style={{height:100, width:100}}/>
    <h1>CAMI MAKE UP</h1>
    </div>
                
    <ul className="menu_inline">
            
        <Link to="/Home"><li>INICIO</li></Link>
        <Link to="/Gallery"><li>GALERIA</li></Link>
        <Link to="/Products"><li>
            <ul>OJOS</ul>
            <ul>BOCA</ul>
            <ul>CEJAS</ul>
        
        </li></Link>
        <Link to="/Services"><li>SERVICIOS</li></Link>
        <li><a className="menu_item" href="html/contacto.html">CONTACTO</a></li> 
            
        <div><a href="#"><img src={instagram} alt="instagram" style={{height:30, width:30}}/></a></div>   
        <div><a href="#"><img src={wspp} alt="whatsapp" style={{height:30, width:30}}/></a></div>
        <CartWidget />    
            
    </ul>
</nav>
   </> );}
