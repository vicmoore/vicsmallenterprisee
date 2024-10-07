import { Routes, Route } from 'react-router-dom';
import Home from './pages/buyer/mobile/homepage/Home';
import SignUp from './pages/buyer/mobile/authentication/SignUp';
import Login from './pages/buyer/mobile/authentication/Login';
import Cart from './pages/buyer/mobile/cart/Cart';
import ProductPage from './pages/buyer/mobile/productpage/ProductPage';
import TermsOfService from './pages/buyer/mobile/termsOfService/TermsOfService';
import RefundAndReturns from './pages/buyer/mobile/refundAndReturns/RefundAndReturns';
import Faqs from './pages/buyer/mobile/faqs/Faqs';
import ContactUs from './pages/buyer/mobile/contactUs/ContactUs';
import Categories from './pages/buyer/mobile/categories/Categories';
import Checkout from './pages/buyer/mobile/checkout/Checkout';
import Profile from './pages/buyer/mobile/profile/ProfilePage';
import Reviews from './pages/buyer/mobile/productpage/Reviews';
import ScrollToTop from './ScrollToTop';
import PrivateRoutes from './routes/PrivateRoutes';

import { AuthProvider } from './context/AuthContext';

function MobileApp() {
  return (
    <>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/reviews" element={<Reviews />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-and-returns" element={<RefundAndReturns />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/categories" element={<Categories />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default MobileApp;
