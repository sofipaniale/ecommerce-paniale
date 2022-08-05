import './Nav.css'
import logo from './logocm.png'
import CartWidget from '../Cartwidget/CartWidget'
import { Link } from 'react-router-dom'


export default function Nav(){
    return (
        <>
  <nav id="nav" className="nav_inline">   
    <div className='img-div'>
    <Link to="/Home"> <img src={logo} alt="logo" style={{height:100, width:100}}/></Link>
    <h1>CAMI MAKE UP</h1>
    </div>
                
    <ul className="menu_inline">
            
        <Link to="/Home"><li>Inicio</li></Link>
        <Link to="/Products/:Category">Rostro</Link>
        <Link to="/Products/:Category"><li>Ojos</li></Link>
        <Link to="/Products/:Category"><li>Labios</li></Link>
        <CartWidget />    
            
    </ul>
</nav>
   </> );}
