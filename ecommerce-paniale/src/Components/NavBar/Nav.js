import './Nav.css'
import logo from './logocm.png'
import CartWidget from '../Cartwidget/CartWidget'
import { Link } from 'react-router-dom'


export default function Nav(){
    return (
        <>
  <nav id="nav" className="nav_inline">   
    <div className='img-div'>
        <Link to="/"> <img src={logo} alt="logo" style={{height:100, width:100}}/></Link>
        <h1>CAMI MAKE UP</h1>
    </div>
                
    <ul className="menu_inline">
            
        <Link to="/" className='text-link'><li>INICIO</li></Link>
        <Link to="/products/rostro" className='text-link'><li>ROSTRO</li></Link>
        <Link to="/products/ojos" className='text-link'><li>OJOS</li></Link>
        <Link to="/products/labios" className='text-link'><li>LABIOS</li></Link>
        <CartWidget />
            
    </ul>
</nav>
   </> );}
