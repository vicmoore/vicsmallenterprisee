import ProductCard from '@/components/common/mobile/ProductCard';
import ShoeImg from '@/assets/images/shoe.png';

const RecommendedItems = () => {
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
      shipped: false,
    },
  ];
  return (
    <div className="w-full">
      <span className="pl-[16px] mb-[20px] flex justify-between">
        <h4 className="text-[20px] font-medium">Recommended Items</h4>
      </span>
      <div className="px-[16px] grid grid-cols-3 gap-x-[8px] gap-y-[22px]">
        {products.map((product, index) => (
          <ProductCard
            name={product.name}
            image={product.image}
            price={product.price}
            discount={product.discount}
            shipped={product.shipped}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
