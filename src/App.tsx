import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Branch from './pages/Branch';
import Contact from './pages/Contact';
import ScrollToHash from './components/ScrollToHash';
import ThetaProducts from './pages/products/Theta';
import NiobushProducts from './pages/products/Niobush';
import OmegaProducts from './pages/products/Omega';
import ZietaProducts from './pages/products/Zieta';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/theta" element={<ThetaProducts />} />
          <Route path="/niobush" element={<NiobushProducts />} />
          <Route path="/omega" element={<OmegaProducts />} />
          <Route path="/zieta" element={<ZietaProducts />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/:productSlug" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
