import ProductCard from '@/components/common/desktop/ProductCard';
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
      discount: 0,
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
      <span className="w-[95%] mx-auto mb-[20px] flex justify-between">
        <h4 className="text-[26px] font-medium">Recommended Items</h4>
      </span>
      <div className="mx-auto flex items-center justify-around gap-4">
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
    </div>
  );
};

export default RecommendedItems;
