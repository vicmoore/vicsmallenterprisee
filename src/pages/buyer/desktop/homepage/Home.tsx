import Header from '../../../../components/common/desktop/Header';
import CategoriesBar from '../../../../components/common/desktop/CategoriesBar';
import Hero from '../../../../components/homepage/desktop/Hero';

import CategoryCarousel from '../../../../components/homepage/desktop/CategoryCarousel';
import FlashSaleSection from '../../../../components/homepage/desktop/FlashSaleSection';
// import CategorySection from '../components/CategorySection';
import RecommendedItems from '../../../../components/homepage/desktop/RecommendedItems';
import Footer from '@/components/common/desktop/Footer';

import { getProducts } from '@/services/BackendFunctions';
import { useEffect, useState } from 'react';

const Home = () => {
  const slugify = (str: string) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const [products, setProducts]: any = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  products.forEach((product: any) => {
    product.link = `/${slugify(product.name)}-${product.$id}`;
  });

  return (
    <div className="min-w-[965px]">
      <Header />
      <CategoriesBar />
      <main className="py-[50px] bg-[#F9F9F9]">
        <Hero />
        <div className="max-w-[1100px] mx-auto mt-[40px] mb-[100px]">
          <CategoryCarousel products={products} header="Male Shoes" />
        </div>
        <div className="mx-auto my-10">
          <FlashSaleSection />
        </div>
        <div className="max-w-[1100px] mx-auto my-10">
          <CategoryCarousel products={products} header="Male Shirts" />
        </div>
        <div className="max-w-[1100px] mx-auto my-10">
          <CategoryCarousel products={products} header="Watches" />
        </div>
        <div className="max-w-[1100px] mx-auto my-10">
          <CategoryCarousel products={products} header="For ladies" />
        </div>
        {/* <div className="mx-auto my-10">
          <CategorySection />
        </div> */}
        <div className="max-w-[1100px] mx-auto my-10">
          <RecommendedItems />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
