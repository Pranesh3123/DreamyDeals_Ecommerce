import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Productcategories from './components/productcategories/Productcategories';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productcategories' element={<Productcategories/>}/>
      </Routes>
    </div>
  );
}

export default App;