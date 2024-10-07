import Header from '@/components/common/mobile/Header';

import ShoeImg from '@/assets/images/shoe.png';
import CategoriesProductCard from '@/components/categories/mobile/CategoriesProductCard';
import { Filter } from 'lucide-react';
import { Checkbox } from '@/components/common/mobile/CheckBox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/mobile/Select';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/mobile/Dialog';
import Footer from '@/components/common/mobile/Footer';

const Categories = () => {
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

  const filters = [
    {
      id: 'watches',
      name: 'watches',
    },
    {
      id: 'rings',
      name: 'rings',
    },
    {
      id: 'anklet',
      name: 'anklet',
    },
    {
      id: 'wrist-bands',
      name: 'wrist bands',
    },
  ];

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
  return (
    <div className="">
      <Header />
      <section className="bg-[#F9F9F9] pb-[30px]">
        <div className="">
          <Dialog>
            <DialogTrigger className="w-full px-[22px] py-[11px] bg-black text-white flex justify-between">
              Filter
              <Filter />
            </DialogTrigger>
            <DialogContent className="h-[90vh] w-[90%] rounded-[11px]">
              <DialogHeader>
                <DialogTitle>Sort</DialogTitle>
                <DialogDescription className="text-black overflow-scroll">
                  <div className="h-fit bg-white mb-[10px] px-[18px] py-[21px]  text-left flex flex-col gap-[30px]">
                    <div className="">
                      <h4 className="">Accessories</h4>
                      <div className="my-[13px] text-[14px] flex flex-col gap-y-[13px]">
                        {filters.map((filter, index) => (
                          <span
                            className="flex items-center gap-x-[8px]"
                            key={index}>
                            <Checkbox id={filter.id} />
                            <label htmlFor={filter.id} className="capitalize">
                              {filter.name}
                            </label>
                          </span>
                        ))}
                      </div>
                    </div>
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
                          <span
                            className="flex items-center gap-x-[8px]"
                            key={index}>
                            <Checkbox id={rating.id} />
                            <label htmlFor={rating.id} className="capitalize">
                              {rating.name}
                            </label>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div className="w-fit mx-4 pt-[50px] grid grid-cols-2 gap-x-[11px] gap-y-[21px]">
            {products.map((product) => (
              <CategoriesProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                discount={product.discount}
                shipped={product.shipped}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Categories;
