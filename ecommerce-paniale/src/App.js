import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './Components/NavBar/Nav';
import Checkout from './Components/Checkout/Checkout';
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Context/CartContext';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Nav />
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Home />}/>
        <Route path="/products/:category" element={<ItemListConteiner />} />
        <Route path="/:id" element={<ItemDetailContainer />} />
        <Route path="products/:category/:id" element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Checkout />}/>
        <Route path="*" element={<h1>ERROR 404 -  pagina no encontrada</h1>}/>

     </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
