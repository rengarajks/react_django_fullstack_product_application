import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar/>
       <Routes>


          <Route  path='/' element={<ShowProducts/>}></Route>
          
          <Route path='/add' element={<AddProduct/>}></Route>

          
         
        </Routes>
       </BrowserRouter>
       
    
     
    
    </div>
  );
}

export default App;
