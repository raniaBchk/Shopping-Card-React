import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Store from './components/Store/Store';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Container } from "react-bootstrap";
import ShoppingCartProvider from './components/context/ShoppingCartContext';


function App() {
  return (

  <ShoppingCartProvider>
   <Container>
   
 
    <BrowserRouter>
    <Navbar/>
    <Routes>
  
      <Route path='/' element={ <Home/>} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
     
    </Routes>
 
    </BrowserRouter> 
    </Container>

    </ShoppingCartProvider>

  );
}

export default App;
