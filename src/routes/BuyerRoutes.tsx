// import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import BuyerHomepage from '@/pages/buyer/desktop/homepage/Home';
import Categories from '@/pages/buyer/desktop/categories/Categories';
import Cart from '@/pages/buyer/desktop/cart/Cart';
import TermsOfService from '@/pages/buyer/desktop/termsOfService/TermsOfService';
import RefundAndReturns from '@/pages/buyer/desktop/refundAndReturns/RefundAndReturns';
import Faqs from '@/pages/buyer/desktop/faqs/Faqs';
import ContactUs from '@/pages/buyer/desktop/contactUs/ContactUs';
import ProductPage from '@/pages/buyer/desktop/productPage/ProductPage';
import ProfilePage from '@/pages/buyer/desktop/profile/ProfilePage';
import Checkout from '@/pages/buyer/desktop/checkout/Checkout';
import ProfileDetails from '@/pages/buyer/desktop/profile/ProfileDetails';
import Orders from '@/pages/buyer/desktop/profile/Orders';
// import PageLoading from '@/pages/buyer/desktop/PageLoading';
import Catalog from '@/pages/buyer/desktop/search/Catalog';

// const LazyProductPage = lazy(
//   () => import('@/pages/buyer/desktop/productPage/ProductPage')
// );
// const LazyProfilePage = lazy(
//   () => import('@/pages/buyer/desktop/profile/ProfilePage')
// );

function BuyerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BuyerHomepage />} />
      <Route path="/catalog/" element={<Catalog />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:category" element={<Categories />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:slug" element={<ProductPage />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/refund-and-returns" element={<RefundAndReturns />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route index element={<ProfileDetails />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Page Not found</div>} />
    </Routes>
  );
}

export default BuyerRoutes;
