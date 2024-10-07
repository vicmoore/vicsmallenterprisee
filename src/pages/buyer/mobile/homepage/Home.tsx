import Header from '@/components/common/mobile/Header';
import CategoriesBar from '@/components/common/mobile/CategoriesBar';
import Hero from '../../../../components/homepage/mobile/Hero';

import ShoeImg from '@/assets/images/shoe.png';
import CategoryCarousel from '../../../../components/homepage/mobile/CategoryCarousel';
import FlashSaleSection from '../../../../components/homepage/mobile/FlashSaleSection';
import RecommendedItems from '../../../../components/homepage/mobile/RecommendedItems';
import Footer from '@/components/common/mobile/Footer';
const Home = () => {
  const products = [
    {
      name: 'Nike',
      image: ShoeImg,
      price: 11200,
      discount: 0.2,
      shipped: false,
    },
    {
      name: 'Nike',
      image: ShoeImg,
      price: 11200,
      discount: 0,
      shipped: true,
    },
    {
      name: 'Nike',
      image: ShoeImg,
      price: 11200,
      discount: 0.2,
      shipped: true,
    },
    {
      name: 'Nike',
      image: ShoeImg,
      price: 11200,
      discount: 0.2,
      shipped: false,
    },
    {
      name: 'Nike',
      image: ShoeImg,
      price: 11200,
      discount: 0.2,
      shipped: true,
    },
    {
      name: 'Nike',
      image: ShoeImg,
      price: 11200,
      discount: 0.2,
      shipped: false,
    },
    {
      name: 'Nike',
      image: ShoeImg,
      price: 11200,
      discount: 0.2,
      shipped: false,
    },
    {
      name: 'Nike',
      image: ShoeImg,
      price: 11200,
      discount: 0.2,
      shipped: false,
    },
  ];
  return (
    <div className="">
      <Header />
      <CategoriesBar />
      <main className="bg-[#F9F9F9]">
        <Hero />
        <div className="">
          <CategoryCarousel products={products} header="Male Shoes" />
        </div>
        <div className="my-10">
          <FlashSaleSection />
        </div>
        <div className="my-10">
          <CategoryCarousel products={products} header="Male Shoes" />
        </div>
        <div className="my-10">
          <CategoryCarousel products={products} header="Female Shoes" />
        </div>
        {/* <div className="mt-10">
          <CategorySection />
        </div> */}
        <div className="py-10">
          <RecommendedItems />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
