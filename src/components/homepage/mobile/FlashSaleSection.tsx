import ProductCard from '@/components/common/mobile/ProductCard';

import FlashSaleBG from '@/assets/images/flash-sale-bg.png';
import ShoeImg from '@/assets/images/shoe.png';

const FlashSaleSection = () => {
  const products = [
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
      discount: 0,
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
      shipped: true,
    },
  ];
  return (
    <section
      style={{
        backgroundImage: `url('${FlashSaleBG}')`,
      }}
      className="pt-[32px] pb-[46px] relative bg-no-repeat bg-cover">
      <div className="pl-[22px]">
        <h2 className="mb-[24px] text-[24px] text-white font-semibold font-inter">
          Flash Sale
        </h2>
        <p className="mb-[26px] text-[14px] text-white">
          Use coupon code #VICSMALLSHIP to get up to 90% off!!
        </p>
      </div>
      <div className="ml-2">
        <div className="w-full hide-bar pl-[22px] pr-2 flex items-center justify-around gap-x-[13px] basis-1/2 overflow-x-scroll snap-x snap-mandatory scroll-smooth">
          {products.map((product, index) => (
            <div
              className="w-[40%] min-w-[40%] max-w-[40%] basis-[40%] snap-start"
              key={index}>
              <ProductCard
                name={product.name}
                image={product.image}
                price={product.price}
                discount={product.discount}
                shipped={product.shipped}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
