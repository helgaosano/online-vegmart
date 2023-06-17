import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './Product'
import Cart from './pages/Cart'
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { useState, useEffect} from 'react';
import Product from './Product';

function App() {
// login
const[newLogin, setNewLogin] = useState();
useEffect(()=>{
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((newLogin) => setNewLogin(newLogin));
      }
    });
}, []);

function handleLogin(newLogin){
  setNewLogin(newLogin);
}
// if (!newLogin){
//   return <Login setNewLogin = {setNewLogin}/>
// }


const handlerGetClickedItem = (event) =>{
    
}


  return (
    // <BrowserRouter>
    <div className="App">
      {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/products" element={<Products handleClickedItem={handlerGetClickedItem}/>}exact/>
      <Route path="/carts" element={<Cart/>}exact />
      <Route path="/login" element={<Login  onLogin={handleLogin}/>} exact />
      <Route path="/contact" element={<Contact />}exact />
      <Route path="/about" element={<About />}exact />
      <Route path="/products/:id" element={<Cart/>}exact />

    </Routes>
    {/* <Footer /> */}
    </div>
    /* // </BrowserRouter> */

  
  );
}

export default App;
