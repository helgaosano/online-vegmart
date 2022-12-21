import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './Product'
import Cart from './pages/Cart'
import Login from './components/Login';
import About from './components/About';

function App() {
  return (
      // <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home/about" element={<About/>}exact/>
        <Route path="/products" element={<Products/>}exact/>
        <Route path="/carts" element={<Cart/>}exact />
        <Route path="/components/login" element={<Login/>} exact />
      </Routes>
      </div>
      /* // </BrowserRouter> */
  );
}

export default App;
