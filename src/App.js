import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

//components
import Shop from './components/Shop';
import Layout from './layout/Layout';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

//context
import ModalContextProvider from './context/ModalContextProvider';
import FilterProductsContextProvider from './context/FilterProductsContextProvider';
import CartContextProvider from './context/cart/CartContextProvider';


function App() {
  return (
    <CartContextProvider>
      <ModalContextProvider>
        <div className="App">
          <FilterProductsContextProvider>
            <Layout>
              <Routes>
                <Route path='/products' element={<Shop />} />
                <Route path='/products/product-details/:id' element={<ProductDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/' element={<Navigate to='/products' replace />} />
              </Routes>
            </Layout>
          </FilterProductsContextProvider>
        </div>
      </ModalContextProvider>
    </CartContextProvider>
  );
}

export default App;
