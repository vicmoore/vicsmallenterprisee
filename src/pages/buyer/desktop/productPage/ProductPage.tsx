import { useContext } from 'react';

import Header from '@/components/common/desktop/Header';
import CategoriesBar from '@/components/common/desktop/CategoriesBar';
// import ShippedTag from '../../../../components/productpage/desktop/ShippedTag';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/common/desktop/BreadCrumbs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/common/desktop/Carousel';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/desktop/Tabs';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/common/desktop/ToogleGroup';

// import BraceletImg from '@/assets/images/bracelet.png';
// import Rating from '@/assets/icons/ratings.png';
// import RelatedProducts from '../../../../components/productpage/desktop/RelatedProducts';
import Footer from '@/components/common/desktop/Footer';
import Reviews from '../../../../components/productpage/desktop/ReviewsTab';
import VendorTab from '../../../../components/productpage/desktop/VendorTab';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { getProductById } from '@/services/BackendFunctions';
import { addCommas } from '@/lib/utils';
import PageLoading from '@/pages/buyer/desktop/PageLoading';

import CartContext from '@/context/CartContext';
import ProductContext from '@/context/ProductContext';

import { useToast } from '@/components/hooks/useToast';

const ProductPage = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const { toast } = useToast();
  const showToast = (title: string, description: string) => {
    toast({
      title: title,
      description: description,
    });
  };

  const url = new URL(window.location.href);
  const lastSlugPart = url.pathname.substring(
    url.pathname.lastIndexOf('/') + 1
  );
  const id = lastSlugPart.split('-')[lastSlugPart.split('-').length - 1];

  const [product, setProduct] = useState<any>({});
  // @ts-ignore
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
      setPageLoading(false);
    });
  }, []);

  let variantStr = `${product?.variants}`;

  const variants = product?.variants ? JSON.parse(variantStr) : [];
  const overviewText = product.description;

  const [mainImage, setMainImage] = useState(0);
  const [saved, setSaved] = useState(false);

  const { addToCart } = useContext(CartContext) || {
    addToCart: () => {},
  };
  // @ts-ignore
  const { addedToCart } = useContext(ProductContext);

  const handleAddToCart = (product: any) => {
    //add product to cart
    addToCart(product);

    showToast('Success', 'Product was successful added to cart.');

    //set product id to addedToCart
    addedToCart(product.$id);
  };

  const handleBuyNow = (product: any) => {
    handleAddToCart(product);

    window.location.href = '/checkout';
  };
  return (
    <div>
      {id === '' ? (
        <div className="">
          <p>Product Not Found</p>
        </div>
      ) : pageLoading ? (
        <PageLoading />
      ) : (
        <>
          <Header />
          <CategoriesBar />
          <section className="mx-auto pb-[64px] bg-[#F9F9F9]">
            <div className="max-w-[1200px] mx-auto py-[22px]">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Accessories</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{product.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="max-w-[1200px] mx-auto">
              <div className="flex gap-x-[21px]">
                <div className="p-[9px] flex flex-col gap-y-[18px]">
                  <div className="bg-gray-200 h-96 rounded-[14px]">
                    <img
                      src={product?.images?.[mainImage]}
                      alt=""
                      className="h-full w-[564px] rounded-[11px] object-contain"
                    />
                  </div>

                  <Carousel className="">
                    <CarouselContent className="flex gap-x-4">
                      {product.images?.map((image: any, index: number) => (
                        <CarouselItem
                          key={index}
                          className="basis-1/5 h-[85px] w-fit pl-0 flex items-center rounded-[14px] overflow-hidden cursor-pointer"
                          onClick={() => {
                            setMainImage(index);
                          }}>
                          <img src={image} alt="" className="" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                  </Carousel>
                </div>
                <div className="bg-white px-[30px] pt-[40px] pb-[12px] rounded-[14px] grow relative">
                  <span className="flex justify-between">
                    {/* <ShippedTag /> */}
                    <Heart
                      className={`absolute top-[12px] right-[30px] cursor-pointer ${
                        saved && 'fill-brand-orange stroke-brand-orange'
                      }`}
                      onClick={() => setSaved(!saved)}
                    />
                  </span>
                  <h3 className="mb-[13px] text-[26px] font-medium">
                    {product.name}
                  </h3>
                  {/* <div className="max-w-[440px] flex justify-between">
                    <img src={Rating} alt="" className="" />
                    <p className="text-[#B6B6B6]">3.0 (250 ratings)</p>
                    <p className="text-[#767575]">45 Items sold</p>
                  </div> */}
                  <div className="mt-[25px]">
                    {/* <div className="flex gap-x-[14px]">
            <h4 className="text-[20px] font-medium font-ubuntu">
              Select Colour:
            </h4>
            <span className="flex gap-x-[8px]">
              <div className="bg-gray-950 h-[30px] w-[30px] rounded-full"></div>
              <div className="bg-red-700 h-[30px] w-[30px] rounded-full"></div>
              <div className="bg-orange-400 h-[30px] w-[30px] rounded-full"></div>
              <div className="bg-gray-500 h-[30px] w-[30px] rounded-full"></div>
            </span>
          </div> */}
                    {variants.length > 1 && (
                      <div className="mt-[11px] flex gap-x-[14px]">
                        <h4 className="text-[20px] font-medium font-ubuntu">
                          Select Variant:
                        </h4>
                        <ToggleGroup
                          type="single"
                          defaultValue={variants[0].variation}
                          className="justify-start gap-[15px]">
                          {variants?.map((variant: any) => (
                            <ToggleGroupItem
                              key={variant.variation}
                              value={variant.variation}
                              aria-label={variant.variation}
                              className="p-0 h-[30px] w-[30px] text-[12px] font-bold border-2 border-[#CECECE] bg-[#CECECE] flex items-center justify-center rounded-[5px] data-[state=on]:border-[#0000006E]">
                              <p className="">{variant.variation}</p>
                            </ToggleGroupItem>
                          ))}
                        </ToggleGroup>
                      </div>
                    )}
                  </div>
                  <hr className="my-[8px]" />
                  <p className="text-[#363636] font-ubuntu">
                    Estimated delivery on March 16, 2024
                  </p>
                  {discount ? (
                    <span className="max-w-[303px] mt-[8px] flex justify-between">
                      <h3 className="text-[30px] font-inter font-semibold">
                        N {addCommas(product.price - product.price * discount)}
                      </h3>
                      <h3 className="text-[30px] text-[#B6B6B6] font-inter font-semibold line-through">
                        N {addCommas(product.price)}
                      </h3>
                    </span>
                  ) : (
                    <h3 className="text-[30px] font-inter font-semibold">
                      N {addCommas(product.price)}
                    </h3>
                  )}
                  <div className="w-[553px] mt-[21px] flex justify-between">
                    <button
                      className="w-[30%] py-[15px] text-[14px] font-semibold bg-brand-blue text-white rounded-[7px]"
                      onClick={() => handleBuyNow(product)}>
                      Buy Now
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-[30%] py-[15px] text-[14px] font-semibold bg-brand-orange text-white rounded-[7px]">
                      Add To Cart
                    </button>
                    <button className="w-[30%] py-[15px] text-[14px] font-semibold text-brand-blue border border-brand-blue rounded-[7px]">
                      Part Payment
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-[76px] bg-white rounded-[14px]">
                <Tabs defaultValue="overview" className="pl-[7px] pt-[8px]">
                  <TabsList className="p-0 bg-[#F5F5F5] text-[#888888] border border-[#DDDDDD] rounded-[14px] overflow-hidden">
                    <TabsTrigger
                      value="overview"
                      className="w-1/3 py-[15px] text-center border-r border-[#DDDDDD] rounded-none">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="reviews"
                      className="w-1/3 py-[15px] bg-[#F5F5F5] text-center text-[#888888] border-r border-[#DDDDDD] rounded-none">
                      Reviews
                    </TabsTrigger>
                    <TabsTrigger
                      value="vendor-info"
                      className="w-1/3 py-[15px] bg-[#F5F5F5] text-center text-[#888888]  border-r border-[#DDDDDD] rounded-none">
                      Vendor Info
                    </TabsTrigger>
                    {/* <TabsTrigger
            value="shipping"
            className="w-1/4 py-[15px] bg-[#F5F5F5] text-center text-[#888888] rounded-none">
            Shipping
          </TabsTrigger> */}
                  </TabsList>
                  <TabsContent
                    value="overview"
                    className="mt-[16px] pl-[22px] pr-[68px] pb-[34px]">
                    <p className="">{overviewText}</p>
                  </TabsContent>
                  <TabsContent value="reviews">
                    <Reviews />
                  </TabsContent>
                  <TabsContent value="vendor-info">
                    <VendorTab />
                  </TabsContent>
                  {/* <TabsContent value="shipping">
          <p className="">{shipping}</p>
        </TabsContent> */}
                </Tabs>
              </div>
            </div>
          </section>
          {/* <div className="max-w-[1200px] mx-auto pt-[71px] pb-[98px]">
            <RelatedProducts products={products} />
          </div> */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default ProductPage;
