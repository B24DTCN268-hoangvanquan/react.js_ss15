import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Detail from './pages/Detail';

function Ex06() {
  return (
    <div>
        <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default Ex06;