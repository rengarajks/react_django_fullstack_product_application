import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import {Routes,Route,BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      
       <BrowserRouter>
       <Routes>
          <Route  path='/' element={<ShowProducts/>}></Route>
          
          <Route path='/add' element={<AddProduct/>}></Route>

          
         
        </Routes>
       </BrowserRouter>
       
    
     
    
    </div>
  );
}

export default App;
