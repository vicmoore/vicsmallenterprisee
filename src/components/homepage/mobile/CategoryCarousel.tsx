import { Link } from 'react-router-dom';

import ProductCard from '@/components/common/mobile/ProductCard';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  discount: number | null;
}
const CategoryCarousel = ({ products, header }: any) => {
  return (
    <div className="w-full pt-[24px]">
      <span className="w-[95%] mx-auto mb-[20px] flex justify-between">
        <h4 className="text-[20px] font-medium">{header}</h4>
        <span className="flex items-center">
          <Link to={'/categories'}>
            <h5 className="text-brand-blue mr-2 text-[14px] font-ubuntu font-medium">
              View More
            </h5>
          </Link>
        </span>
      </span>
      <div className="mx-2">
        <div className="w-full pb-3 flex gap-2 overflow-x-scroll snap-x snap-mandatory scroll-smooth">
          {products.map((product: ProductCardProps, index: number) => (
            <div
              className="w-[40%] min-w-[40%] max-w-[40%] basis-[40%] snap-start"
              key={index}>
              <ProductCard
                name={product.name}
                image={product.image}
                price={product.price}
                key={index}
                discount={product.discount}
                shipped={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
