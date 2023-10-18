import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Productcategories from './components/productcategories/Productcategories';
import Products from './components/products/Products';
import Register from './components/login/Register';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/productcategories' element={<Productcategories/>}/>
        <Route path='/Products' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;