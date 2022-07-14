import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import SelectedProduct from './Components/Home/Products/selectedProduct';
import Navber from './Components/Navber/Navber';

function App() {
  return (
    <div className="App">
      <Navber/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:productId' element={<SelectedProduct/>}/>

      </Routes>
    </div>
  );
}

export default App;
