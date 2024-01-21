import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import UpdateProduct from './components/UpdateProduct';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar/>
       <Routes>


          <Route  path='/' element={<ShowProducts/>}></Route>
          
          <Route path='/add' element={<AddProduct/>}></Route>
          <Route path='/:id/' element={<ProductDetail/>}></Route>
          <Route path='/:id/update' element={<UpdateProduct/>}></Route>


          
         
        </Routes>
       </BrowserRouter>
       
    
     
    
    </div>
  );
}

export default App;
