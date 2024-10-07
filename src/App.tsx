import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/buyer/desktop/authentication/SignUp';
import Login from './pages/buyer/desktop/authentication/Login';
import ScrollToTop from './ScrollToTop';
import { UserProvider } from './context/UserContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

import BuyerRoutes from './routes/BuyerRoutes';
import VendorRoutes from './routes/VendorRoutes';

import { Toaster } from './components/common/desktop/Toaster';

function App() {
  return (
    <>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <ScrollToTop />
            <Routes>
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/login" element={<Login />} />

              <Route path="/*" element={<BuyerRoutes />} />
              <Route path="/vendor/*" element={<VendorRoutes />} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
      <Toaster />
    </>
  );
}

export default App;
