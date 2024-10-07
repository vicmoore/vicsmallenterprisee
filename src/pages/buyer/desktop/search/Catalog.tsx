import Header from '@/components/common/desktop/Header';
import ProductCard from '@/components/common/desktop/ProductCard';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/common/desktop/BreadCrumbs';
import { Checkbox } from '@/components/common/desktop/CheckBox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/desktop/Select';
import { useEffect, useState } from 'react';
import { searchProducts, getProducts } from '@/services/BackendFunctions';
import { slugify } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

const Catalog = () => {
  interface ProductCardProps {
    name: string;
    images: string[];
    price: number;
    discount: number;
    shipped: boolean;
    link: string;
  }
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts]: any = useState([]);

  const ratings = [
    {
      id: 'five',
      name: '5 ratings',
    },
    {
      id: 'four',
      name: '4 ratings & up',
    },
    {
      id: 'three',
      name: '3 ratings & up',
    },
    {
      id: 'two',
      name: '2 ratings & up',
    },
    {
      id: 'one',
      name: '1 rating & up',
    },
  ];

  const query = window.location.search
    .slice(1)
    .split('%20')
    .join(' ')
    .toLowerCase();

  // const [selectedRating, setSelectedRating] = useState(ratings[0].id);
  useEffect(() => {
    if (query) {
      searchProducts(query).then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
    } else {
      getProducts().then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
    }
  }, [query]);

  products?.forEach((product: any) => {
    product.link = `/${slugify(product.name)}-${product.$id}`;
  });
  return (
    <div className="">
      <Header />
      <section className="bg-[#F9F9F9]">
        <div className="max-w-[1200px] mx-auto py-[22px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex justify-center gap-[18px]">
          <div className="h-fit w-[17%] bg-white mb-[10px] px-[18px] py-[21px] rounded-[9px] top-[60px] flex flex-col gap-[30px]">
            {/* <div className="">
              <h4 className="">Accessories</h4>
              <div className="my-[13px] text-[14px] flex flex-col gap-y-[13px]">
                {filters.map((filter, index) => (
                  <span className="flex items-center gap-x-[8px]" key={index}>
                    <Checkbox id={filter.id} />
                    <label htmlFor={filter.id} className="capitalize">
                      {filter.name}
                    </label>
                  </span>
                ))}
              </div>
            </div> */}
            <div className="">
              <h4 className="">Sort By Price</h4>
              <div className="my-[13px] text-[14px] flex flex-col gap-y-[13px]">
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Min" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="min">Min</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Max" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="max">Max</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="">
              <h4 className="">Sort By Rating</h4>
              <div className="my-[13px] text-[14px] flex flex-col gap-y-[13px]">
                {ratings.map((rating, index) => (
                  <span className="flex items-center gap-x-[8px]" key={index}>
                    <Checkbox id={rating.id} />
                    <label htmlFor={rating.id} className="capitalize">
                      {rating.name}
                    </label>
                  </span>
                ))}
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="flex items-center justify-center grow">
              <LoaderCircle className="animate-spin" />
            </div>
          ) : (
            <>
              {products?.length !== 0 ? (
                <div className="grid grid-cols-4 gap-x-[24px] gap-y-[50px] grow">
                  {products?.map((product: ProductCardProps, index: number) => (
                    <ProductCard
                      image={product.images[0]}
                      name={product.name}
                      price={product.price}
                      discount={product.discount}
                      shipped={product.shipped}
                      link={product.link}
                      key={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-[24px] text-[#000000]">
                    No products found
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Catalog;
