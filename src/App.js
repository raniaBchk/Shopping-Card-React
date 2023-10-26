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
   
 
    <BrowserRouter basename='/Shopping-Card-React'>
    <Navbar/>
   
    <Routes>
  
      <Route path='/home' element={ <Home/>} />
      <Route path="/" element={<Store />} />
      <Route path="/about" element={<About />} />
     
    </Routes>
 
    </BrowserRouter> 
    </Container>

    </ShoppingCartProvider>

  );
}

export default App;
