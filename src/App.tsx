import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Branch from './pages/Branch';
import Contact from './pages/Contact';
import ScrollToHash from './components/ScrollToHash';
import ThetaProducts from './pages/products/Theta';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/theta" element={<ThetaProducts />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/:productSlug" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
