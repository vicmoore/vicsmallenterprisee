import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';

import VendorHomepage from '@/pages/vendor/desktop/dashboard/Dashboard';

import Checkout from '@/pages/buyer/desktop/checkout/Checkout';
import ProfilePage from '@/pages/buyer/desktop/profile/ProfilePage';

import ViewProducts from '@/pages/vendor/desktop/products/ViewProducts';
import EditProducts from '@/pages/vendor/desktop/products/EditProducts';
import CreateProduct from '@/pages/vendor/desktop/products/CreateProduct';

function VendorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<VendorHomepage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/orders" element={<ViewProducts />} />
      <Route path="/products" element={<ViewProducts />} />
      <Route path="/products/edit" element={<EditProducts />} />
      <Route path="/products/create" element={<CreateProduct />} />
      <Route path="*" element={<div>Page Not found</div>} />
    </Routes>
  );
}

export default VendorRoutes;
