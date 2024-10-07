import { useState } from 'react';

import Header from '@/components/common/mobile/Header';
import CategoriesBar from '@/components/common/mobile/CategoriesBar';
import ShippedTag from '../../../../components/productpage/mobile/ShippedTag';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/common/mobile/Carousel';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/common/mobile/ToogleGroup';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/mobile/Tabs';

import { Heart } from 'lucide-react';

import BraceletImg from '@/assets/images/bracelet.png';
import ShoeImg from '@/assets/images/shoe.png';
// import HeartIcon from '@/components/common/mobile/heart-icon.png';
import Rating from '@/assets/icons/ratings.png';
import RelatedProducts from '@/components/productpage/mobile/RelatedProducts';
import Footer from '@/components/common/mobile/Footer';
import VendorTab from '@/components/productpage/mobile/VendorTab';
import ReviewsTab from '@/components/productpage/mobile/ReviewsTab';

const ProductPage = () => {
  const overviewText =
    'Overview ipsum component variant main layer. Subtract fill pencil library vector scrolling editor strikethrough opacity follower. Team editor draft auto group flows main link rectangle text. Figjam pixel variant rotate frame. Scrolling duplicate figjam thumbnail object arrow content align blur. Subtract horizontal layout team rectangle scale overflow editor layer. Style outline underline duplicate edit layer duplicate ipsum reesizing vertical. Pencil arrow rotate image vector follower. Bold group overflow fill device scale. Effect auto figjam shadow link polygon duplicate. Comment project strikethrough arrange inspect opacity scrolling scrolling shadow. Overflow asset strikethrough community prototype font. Object select community scale group slice polygon align edit. Invite rotate prototype ellipse project opacity. Subtract mask asset follower scale thumbnail. Ipsum slice italic arrange mask reesizing boolean arrange font. Vertical star figjam arrow strikethrough mask outline. Inspect opacity duplicate outline pixel. ';
  const products = [
    {
      name: 'Bracelet',
      image: BraceletImg,
      price: 34500,
      discount: 0,
    },
    {
      name: 'Bracelet',
      image: ShoeImg,
      price: 34500,
      discount: 0,
    },
    {
      name: 'Bracelet',
      image: BraceletImg,
      price: 34500,
      discount: 0,
    },
    {
      name: 'Bracelet',
      image: ShoeImg,
      price: 34500,
      discount: 0,
    },
    {
      name: 'Bracelet',
      image: BraceletImg,
      price: 34500,
      discount: 0,
    },
    {
      name: 'Bracelet',
      image: BraceletImg,
      price: 34500,
      discount: 0,
    },
  ];

  const tabs = [
    {
      name: 'overview',
      value: 'overview',
    },
    {
      name: 'reviews',
      value: 'reviews',
    },
    {
      name: 'vendor info',
      value: 'vendor-info',
    },
  ];

  const variants = [
    {
      name: '10',
      value: '10',
      ariaLabel: 'toggle 10',
    },
    {
      name: '20',
      value: '20',
      ariaLabel: 'toggle 20',
    },
    {
      name: '30',
      value: '30',
      ariaLabel: 'toggle 30',
    },
    {
      name: '40',
      value: '40',
      ariaLabel: 'toggle 40',
    },
    {
      name: '50',
      value: '50',
      ariaLabel: 'toggle 50',
    },
  ];

  const [mainImage, setMainImage] = useState(0);
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <Header />
      <CategoriesBar />
      <section className="mx-auto pb-[64px] bg-[#F9F9F9]">
        <div className="">
          <div className="flex flex-col gap-x-[21px]">
            <div className="p-[9px] flex flex-col gap-y-[18px]">
              <div className="h-[372px] flex items-center justify-center bg-white p-[9px] rounded-[14px]">
                <img
                  src={products[mainImage].image}
                  alt=""
                  className="w-full max-h-full rounded-[11px] object-contain"
                />
              </div>

              <Carousel className="">
                <CarouselContent className="ml-0 flex items-center gap-x-2">
                  {products.map((product, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/5 h-[75px] w-fit pl-0 flex items-center rounded-[14px] overflow-hidden"
                      onClick={() => {
                        setMainImage(index);
                      }}>
                      <img src={product.image} alt="" className="h-full" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className="bg-white px-[20px] pt-[40px] pb-[12px] rounded-[14px] grow relative">
              <span className="flex justify-between">
                {/* <ShippedTag /> */}

                <Heart
                  className={`absolute top-[12px] right-[30px] ${
                    saved && 'fill-brand-orange stroke-brand-orange'
                  }`}
                  onClick={() => setSaved(!saved)}
                />
              </span>
              <h3 className="mb-[13px] text-[16px] font-medium">
                Fashion Front Classic Men Leather Multilayer Bracelet Brown
              </h3>
              <div className="flex items-center">
                <img src={Rating} alt="" className="h-[20px] mr-[2px]" />
                <p className="mr-[10px] text-[#B6B6B6] text-[13px] leading-none">
                  3.0 (250 ratings)
                </p>
                <p className="text-[#767575] text-[13px] leading-none">
                  45 Items sold
                </p>
              </div>
              <div className="my-[11px]">
                <ShippedTag />
              </div>
              <div className="mt-[25px]">
                <div className="flex flex-col gap-y-[10px]">
                  <h4 className="text-[14px] font-medium font-ubuntu">
                    Select Colour:
                  </h4>
                  <span className="flex gap-x-[8px]">
                    <div className="bg-gray-950 h-[30px] w-[30px] rounded-full"></div>
                    <div className="bg-red-700 h-[30px] w-[30px] rounded-full"></div>
                    <div className="bg-orange-400 h-[30px] w-[30px] rounded-full"></div>
                    <div className="bg-gray-500 h-[30px] w-[30px] rounded-full"></div>
                  </span>
                </div>
                <div className="mt-[11px] flex flex-col gap-y-[10px]">
                  <h4 className="text-[14px] font-medium font-ubuntu">
                    Select Variant:
                  </h4>
                  <ToggleGroup
                    type="single"
                    defaultValue={variants[0].value}
                    className="justify-start gap-[15px]">
                    {variants.map((variant) => (
                      <ToggleGroupItem
                        key={variant.name}
                        value={variant.value}
                        aria-label={variant.ariaLabel}
                        className="p-0 h-[30px] w-[30px] text-[12px] font-bold border-2 border-[#CECECE] bg-[#CECECE] flex items-center justify-center rounded-[5px] data-[state=on]:border-[#0000006E]">
                        <p className="">{variant.name}</p>
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                  {/* <span className="flex gap-x-[8px]"></span> */}
                </div>
              </div>
              <hr className="my-[8px]" />
              <p className="text-[#363636] font-ubuntu">
                Estimated delivery on March 16, 2024
              </p>
              <span className="max-w-[303px] mt-[8px] flex gap-x-[19px]">
                <h3 className="text-[17px] font-inter font-semibold">
                  N 25,000
                </h3>
                <h3 className="text-[17px] text-[#B6B6B6] font-inter font-semibold line-through">
                  N 350,000
                </h3>
              </span>
              <div className="mt-[21px] flex justify-around gap-x-[9px]">
                <button className="w-[30%] py-[15px] text-[12px] font-semibold bg-brand-blue text-white rounded-[7px]">
                  Buy Now
                </button>
                <button className="w-[30%] py-[15px] text-[12px] font-semibold bg-brand-orange text-white rounded-[7px]">
                  Add To Cart
                </button>
                <button className="w-[30%] py-[15px] text-[12px] font-semibold text-brand-blue border border-brand-blue rounded-[7px]">
                  Part Payment
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[17px] bg-white rounded-[14px]">
            <Tabs defaultValue="overview" className="pt-[8px]">
              <TabsList className="w-full max-w-[320px] mx-[20px] p-0 bg-[#F5F5F5] text-[#888888] text-[12px] border border-[#DDDDDD] rounded-[14px] overflow-hidden">
                {tabs.map((tab, index) => (
                  <TabsTrigger
                    key={index}
                    value={tab.value}
                    className="w-1/3 py-[15px] text-center border-r border-[#DDDDDD] rounded-none capitalize">
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent
                value="overview"
                className="mt-[16px] px-[22px] pb-[34px]">
                <p className="">{overviewText}</p>
              </TabsContent>
              <TabsContent value="reviews">
                <ReviewsTab />
              </TabsContent>
              <TabsContent value="vendor-info">
                <VendorTab />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      <div className="pt-[40px] pb-[98px]">
        <RelatedProducts products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
