import ProductCard from '@/components/common/desktop/ProductCard';

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
      shipped: true,
    },
  ];
  return (
    <section
      style={{
        backgroundImage: `url('${FlashSaleBG}')`,
      }}
      className="pt-[45px] pb-[78px] relative bg-flash-sale-desktop bg-no-repeat bg-cover">
      <h2 className="mb-[25px] text-[47px] text-white font-medium text-center">
        Flash Sale
      </h2>
      <p className="mb-[53px] text-[18px] text-white text-center">
        Use coupon code #VICSMALLSHIP to get up to 90% off!!
      </p>
      <div className="max-w-[1196px] mx-auto flex items-center justify-around">
        {products.map((product, index) => (
          <ProductCard
            name={product.name}
            image={product.image}
            price={product.price}
            discount={product.discount}
            shipped={product.shipped}
            link="/product"
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FlashSaleSection;
