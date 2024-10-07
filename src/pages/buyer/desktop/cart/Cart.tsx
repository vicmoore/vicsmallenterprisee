import { useContext, useEffect, useState } from 'react';
import { Label } from '@/components/common/desktop/Label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/common/desktop/RadioGroup';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/common/desktop/BreadCrumbs';
import CategoriesBar from '@/components/common/desktop/CategoriesBar';
import Header from '@/components/common/desktop/Header';
import Footer from '@/components/common/desktop/Footer';
import CartItem from '@/components/cart/CartItem';

import CartContext from '@/context/CartContext';
// import { Checkbox } from '@components/CheckBox';
const Cart = () => {
  const { cart } = useContext(CartContext) || {
    addToCart: () => {},
  };

  const [amount, setAmount] = useState<{ [key: number]: number }>({});
  const [cartTotal, setCartTotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  if (!cart) {
    setDeliveryFee(8000);
  }
  const cartItems = cart?.map(
    (item: { $id: number; images: any[]; name: string; price: number }) => ({
      image: item.images[0],
      name: item.name,
      price: item.price,
      id: item.$id,
    })
  );

  useEffect(() => {
    const initialAmount: { [key: number]: number } = {};
    cartItems?.forEach((item: any) => {
      initialAmount[item.id] = 1;
    });
    setAmount(initialAmount);
  }, [cart]);

  useEffect(() => {
    // Calculate total whenever quantities change
    const newTotal =
      cartItems?.reduce((acc, item) => {
        return acc + item.price * (amount[item.id] || 1);
      }, 0) || 0;
    setCartTotal(newTotal);
  }, [cart, amount]);

  const updateAmount = (itemId: any, newAmount: any) => {
    setAmount((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  function addCommas(num: number): string {
    return num.toLocaleString();
  }

  const [discount] = useState(0);
  return (
    <div className="">
      <Header />
      <CategoriesBar />
      <section className="bg-[#F9F9F9] pb-[100px]">
        <div className="max-w-[1200px] mx-auto py-[22px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cart</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="max-w-[1200px] mx-auto flex gap-x-[28px]">
          <div className="px-[36px] py-[15px] bg-white rounded-[14px] grow">
            <h3 className="mb-[19px] text-[30px]">Cart</h3>
            {cartItems?.length == 0 ? (
              <div className="flex justify-center items-center">
                <h3 className="text-[20px] font-medium">Cart is empty</h3>
              </div>
            ) : (
              <>
                {/* Card start */}
                {cartItems?.map((item, index) => (
                  <div
                    className={`pt-[18px] flex items-center gap-x-[15px] ${
                      index != cartItems?.length - 1 &&
                      'pb-[18px] border-b border-b-[#00000033]'
                    }`}
                    key={index}>
                    <CartItem
                      item={item}
                      amount={amount[item.id] || 1}
                      updateAmount={(newAmount: any) =>
                        updateAmount(item.id, newAmount)
                      }
                    />
                  </div>
                ))}
                {/* Card end */}
              </>
            )}
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <div className="px-[20px] py-[15px] bg-white rounded-[14px] flex flex-col items-center">
              <h3 className="w-full text-[26px] font-medium font-inter">
                Coupon Code
              </h3>
              <input
                type="text"
                placeholder=""
                className="bg-[#EFEFEF] my-[20px] px-[16px] py-[12px] rounded-[11px] focus-visible:outline-none"
              />
              <button className="text-[14px] font-semibold text-brand-blue">
                Apply Code
              </button>
            </div>
            <div className="bg-white px-[20px] py-[15px] rounded-[14px]">
              <h3 className="mb-[27px] text-[26px] font-medium font-inter">
                Payment Mode
              </h3>
              <RadioGroup defaultValue="full-payment">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="full-payment" id="r1" />
                  <Label htmlFor="r1">Full Payment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="part-payment" id="r2" />
                  <Label htmlFor="r2">Part Payment</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="bg-white px-[20px] py-[15px] rounded-[14px]">
              <h3 className="mb-[27px] text-[26px] font-medium font-inter">
                Order Summary
              </h3>
              <div className="mb-[33px]">
                <span className="flex justify-between">
                  <p className="text-[#626262] font-medium font-inter">
                    Sub Total
                  </p>
                  <p className="font-medium font-inter">
                    N{addCommas(cartTotal)}
                  </p>
                </span>
                <span className="flex justify-between">
                  <p className="text-[#626262] font-medium font-inter">
                    Delivery Fee
                  </p>
                  <p className="font-medium font-inter">
                    N{addCommas(deliveryFee)}
                  </p>
                </span>
                {discount > 0 && (
                  <span className="flex justify-between">
                    <p className="text-[#626262] font-medium font-inter">
                      Discount
                    </p>
                    <p className="font-medium font-inter">-N10,000</p>
                  </span>
                )}
                <span className="flex justify-between">
                  <p className="text-[#626262] font-medium font-inter">
                    Grand Total
                  </p>
                  <p className="font-medium font-inter">
                    N{addCommas(cartTotal + deliveryFee)}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-y-[11px]">
                <button
                  className="py-[15px] text-white bg-brand-orange rounded-[7px]"
                  onClick={() => (window.location.href = '/checkout')}>
                  Checkout
                </button>
                <button
                  className="py-[15px] text-brand-blue border border-brand-blue rounded-[7px]"
                  onClick={() => (window.location.href = '/')}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
