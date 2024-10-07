import ProductCard from '@/components/common/desktop/ProductCard';

const RelatedProducts = ({ products }: any) => {
  return (
    <div className="">
      <h2 className="mb-[20px] text-[26px] font-semibold">Related Products</h2>
      <div className="flex justify-between">
        {products.map((product: any, index: number) => (
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

export default RelatedProducts;
