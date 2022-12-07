import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Products from './Components/Products';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/singleproduct/:id' element={<SingleProduct />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
