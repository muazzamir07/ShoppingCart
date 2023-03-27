import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Categories from './Categories';
import Checkout from './Checkout';
import { Provider } from 'react-redux';
import Store from './Store';
function App() {
  return (
    <Provider store={Store}>
    {/* <Categories></Categories> */}

    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Categories />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Cart" element={<Cart/>}></Route>        
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;