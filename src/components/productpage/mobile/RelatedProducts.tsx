import ProductCard from '@/components/common/mobile/ProductCard';

const RelatedProducts = ({ products }: any) => {
  return (
    <div className="px-[16px]">
      <h2 className="mb-[20px] text-[26px] font-semibold">Related Products</h2>
      <div className="flex gap-x-[8px] gap-y-[22px] overflow-x-scroll hide-bar">
        {products.map((product: any, index: number) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            discount={product.discount}
            shipped={product.shipped}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
