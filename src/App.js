import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './Product'
import Cart from './pages/Cart'
import Login from './components/Login';
import About from './components/About';
import Footer from './components/Footer';
import { useState, useEffect} from 'react';

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
    console.log(event)
}


  return (
    // <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/home/about" element={<About/>}exact/>
      <Route path="/products" element={<Products handleClickedItem={handlerGetClickedItem}/>}exact/>
      <Route path="/carts" element={<Cart/>}exact />
      <Route path="/components/login" element={<Login  onLogin={handleLogin}/>} exact />
    </Routes>
    {/* <Footer /> */}
    </div>
    /* // </BrowserRouter> */

  
  );
}

export default App;
