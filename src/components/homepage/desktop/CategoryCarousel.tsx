import ProductCard from '@/components/common/desktop/ProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/common/desktop/Carousel';

import RightArrowIcon from '@/assets/icons/right-arrow-icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  name: string;
  images: string[];
  price: number;
  discount: number;
  shipped: boolean;
  link: string;
}
const CategoryCarousel = ({ products, header }: any) => {
  const [showArrows, setShowArrows] = useState(true);
  return (
    <div className="w-full">
      <span className="w-[95%] mx-auto mb-[20px] flex justify-between">
        <h4 className="text-[26px] font-medium">{header}</h4>
        <Link to={`/categories`} className="flex items-center">
          <h5 className="text-brand-blue mr-2">View More</h5>
          <img src={RightArrowIcon} alt="" />
        </Link>
      </span>
      <Carousel
        onMouseOver={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}>
        <CarouselContent className="flex">
          {products.map((product: ProductCardProps, index: number) => (
            <CarouselItem className="basis-1/5" key={index}>
              <ProductCard
                name={product.name}
                image={product.images[0]}
                price={product.price}
                discount={product.discount}
                shipped={product.shipped}
                link={product.link}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {showArrows && (
          <>
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <CarouselPrevious className="h-11 w-11 relative left-0 top-0 translate-y-0" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-5">
              <CarouselNext className="h-11 w-11 relative left-0 top-0 translate-y-0" />
            </div>
          </>
        )}
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
