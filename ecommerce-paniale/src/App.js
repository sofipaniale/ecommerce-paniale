import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './Components/NavBar/Nav';
import Checkout from './pages/Checkout';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/productos" element={<h1>Productos</h1>}/>
      <Route path="/productos/:id" element={<Detail />} />
      <Route path='/cart' element={<Checkout />}/>
      <Route path="*" element={<h1>ERROR 404 -  pagina no encontrada</h1>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
