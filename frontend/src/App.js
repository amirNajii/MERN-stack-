import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from './components/AddProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Navbar/>
         <Routes>
           <Route path='/' element={<ProductList/>}/>
           <Route path='/add' element={<AddProduct/>}/>
           <Route path='/edit/:id' element={<Edit/>}/>
       
         </Routes>
         <ToastContainer/>
         
         </BrowserRouter>
    </div>
  );
}

export default App;
