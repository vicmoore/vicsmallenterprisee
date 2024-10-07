import { Label } from '@/components/common/mobile/Label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/common/mobile/RadioGroup';
import Header from '@/components/common/mobile/Header';
import Footer from '@/components/common/mobile/Footer';
import { Checkbox } from '@/components/common/mobile/CheckBox';

import { AddressForm } from '../../../../components/checkout/mobile/AddressForm';

import PaystackImg from '@/assets/icons/paystack.png';

const Checkout = () => {
  return (
    <div>
      <Header />
      <section className="bg-[#F9F9F9] pb-[60px]">
        <div className="flex flex-col gap-x-[28px]">
          <div className="px-[36px] py-[15px] bg-white rounded-[14px] flex-grow">
            <h3 className="mb-[19px] text-[20px]">Delivery Address</h3>
            <AddressForm />
          </div>
          <div className="mt-[30px] flex flex-col gap-y-[16px]">
            <div className="bg-white px-[20px] py-[15px] rounded-[14px]">
              <h3 className="mb-[27px] text-[20px] font-medium font-inter">
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
            </div>
            <div className="bg-white px-[20px] py-[15px] rounded-[14px]">
              <h3 className="mb-[27px] text-[20px] font-medium font-inter">
                Payment Mode
              </h3>
              <RadioGroup defaultValue="card-payment">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card-payment" id="r1" />
                  <Label htmlFor="r1">Card Payment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="payment-on-delivery" id="r2" />
                  <Label htmlFor="r2">Payment On Delivery</Label>
                </div>
              </RadioGroup>
              <img src={PaystackImg} alt="" className="mx-auto my-[17px]" />
              <p className="text-[#414141BD] text-[14px] font-ubuntu leading-[20px]">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <div className="my-[20px] flex items-center gap-x-[10px]">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  I have read and agree to the website's{' '}
                  <span className="underline">terms and conditions</span>
                </label>
              </div>
              <div className="flex flex-col gap-y-[11px]">
                <button className="py-[15px] text-white font-medium bg-brand-orange rounded-[7px]">
                  Proceed To Payment
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

export default Checkout;
