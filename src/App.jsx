import './App.css'
import MegaMenu from './components/Megamenu'
import Navbar from './components/Navbar'
import Products from './components/products'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from './components/CartContext'
import CartPage from './pages/CartPage'
import SearchResults from './pages/SearchResults'
import Footer from './components/Footer'


function App() {
  return (
    <CartProvider >
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
};

export default App
