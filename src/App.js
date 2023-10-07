import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Productcategories from './components/productcategories/Productcategories';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productcategories' element={<Productcategories/>}/>
        <Route path='/Products' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;