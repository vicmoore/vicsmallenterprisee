import { useState } from 'react';
import { Label } from '@/components/common/mobile/Label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/common/mobile/RadioGroup';
import { Link } from 'react-router-dom';

// import CategoriesBar from '@/components/common/desktop/CategoriesBar';
// import Header from '@/components/common/desktop/Header';

import ShoeImg from '@/assets/images/shoe.png';
import TrashIcon from '@/assets/icons/trash-icon.svg';
import Footer from '@/components/common/mobile/Footer';
// import { Checkbox } from '@components/CheckBox';
const Cart = () => {
  const [amount, setAmount] = useState(1);

  const cartItems = [
    {
      image: ShoeImg,
      name: 'Fashion Front Classic Men Leather Multilayer Bracelet Brown',
      price: 25000,
    },
    {
      image: ShoeImg,
      name: 'Fashion Front Classic Men Leather Multilayer Bracelet Brown',
      price: 25000,
    },
    {
      image: ShoeImg,
      name: 'Fashion Front Classic Men Leather Multilayer Bracelet Brown',
      price: 25000,
    },
  ];
  return (
    <div className="">
      <section className="bg-[#F9F9F9] px-[20px] pt-[30px] pb-[100px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-y-[28px]">
          <div className="px-[12px] py-[15px] bg-white rounded-[14px]">
            <h3 className="mb-[19px] text-[30px] text-center">Cart</h3>
            {/* Card start */}
            {cartItems.map((item, index) => (
              <div
                className={`pt-[18px] flex items-center justify-between  ${
                  index != cartItems.length - 1 &&
                  'pb-[18px] border-b border-b-[#00000033]'
                }`}
                key={index}>
                <div className="flex gap-x-[15px]">
                  <img src={item.image} alt="" className="h-[71px] w-[71px]" />
                  <div className="mr-[7px] self-start">
                    <h5 className="mb-[15px] text-[12px] font-medium font-inter leading-[12px] line-clamp-2">
                      {item.name}
                    </h5>
                    <div className="flex items-center gap-x-[15px]">
                      <span className="flex gap-x-[5px]">
                        <button
                          className="h-[22px] w-[22px] bg-red-600 text-white rounded-[5px]"
                          onClick={() => setAmount((amount) => amount - 1)}>
                          -
                        </button>
                        <span className="min-w-[23px] text-center">
                          {amount}
                        </span>
                        <button
                          className="h-[22px] w-[22px] bg-green-600 text-white rounded-[5px]"
                          onClick={() => setAmount((amount) => amount + 1)}>
                          +
                        </button>
                      </span>
                      <h5 className="text-[16px] font-bold font-inter">
                        N {item.price * amount}
                      </h5>
                    </div>
                  </div>
                </div>
                <img src={TrashIcon} alt="" className="h-[24px] w-[24px]" />
              </div>
            ))}
            {/* Card end */}
          </div>
          <div className="flex flex-col gap-y-[28px]">
            <div className="px-[10px] py-[15px] bg-white rounded-[14px] flex flex-col items-center">
              <h3 className="w-full text-[23px] font-semibold font-inter text-center">
                Coupon Code
              </h3>
              <input
                type="text"
                placeholder=""
                className="bg-[#EFEFEF] w-full my-[20px] px-[16px] py-[12px] rounded-[11px] focus-visible:outline-none"
              />
              <button className="text-[14px] font-medium text-brand-blue">
                Apply Code
              </button>
            </div>
            <div className="bg-white px-[20px] py-[15px] rounded-[14px]">
              <h3 className="mb-[27px] text-[23px] font-medium font-inter text-center">
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
              <h3 className="mb-[27px] text-[23px] font-medium font-inter text-center">
                Order Summary
              </h3>
              <div className="mb-[33px]">
                <span className="flex justify-between">
                  <p className="text-[#626262] font-medium font-inter">
                    Sub Total
                  </p>
                  <p className="font-medium font-inter">N110,000</p>
                </span>
                <span className="flex justify-between">
                  <p className="text-[#626262] font-medium font-inter">
                    Delivery Fee
                  </p>
                  <p className="font-medium font-inter">N8,000</p>
                </span>
                <span className="flex justify-between">
                  <p className="text-[#626262] font-medium font-inter">
                    Discount
                  </p>
                  <p className="font-medium font-inter">-N10,000</p>
                </span>
                <span className="flex justify-between">
                  <p className="text-[#626262] font-medium font-inter">
                    Grand Total
                  </p>
                  <p className="font-medium font-inter">N108,000</p>
                </span>
              </div>
              <div className="flex flex-col gap-y-[11px]">
                <Link
                  to={'/checkout'}
                  className="py-[15px] text-white text-center bg-brand-orange rounded-[7px]">
                  Checkout
                </Link>
                <Link
                  to={'/'}
                  className="py-[15px] text-brand-blue border text-center border-brand-blue rounded-[7px]">
                  Continue Shopping
                </Link>
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
