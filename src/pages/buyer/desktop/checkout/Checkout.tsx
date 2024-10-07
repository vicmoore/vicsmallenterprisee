import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/common/desktop/BreadCrumbs';
import { Label } from '@/components/common/desktop/Label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/common/desktop/RadioGroup';
import Header from '@/components/common/desktop/Header';
import Footer from '@/components/common/desktop/Footer';

import UserContext from '@/context/UserContext';
import { AddressForm } from '@/components/checkout/desktop/AddressForm';
import { getUserAddresses } from '@/services/BackendFunctions';

import PaystackImg from '@/assets/icons/paystack.png';
import { useContext, useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartContext from '@/context/CartContext';
import { addCommas } from '@/lib/utils';

const Checkout = () => {
  const { userDetails } = useContext(UserContext) || {};
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState<any[]>([]);
  useEffect(() => {
    getUserAddresses(userDetails?.$id).then((res) => {
      setAddresses(JSON.parse(res));
    });
  }, [userDetails]);

  const { cart } = useContext(CartContext) || {
    addToCart: () => {},
  };

  const [cartTotal, setCartTotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [amount, setAmount] = useState<{ [key: number]: number }>({});

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

  const [discount] = useState(0);
  const [termsChecked, setTermsChecked] = useState(false);
  return (
    <div>
      <Header />
      <section className="bg-[#F9F9F9] pb-[100px]">
        <div className="max-w-[1200px] mx-auto py-[22px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Checkout</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="max-w-[1200px] mx-auto flex gap-x-[28px]">
          <div className="px-[36px] py-[15px] bg-white rounded-[14px] flex-grow">
            <div className="flex justify-between">
              <h3 className="mb-[19px] text-xl">Delivery Address</h3>
              {showForm && (
                <button
                  className="text-[14px]"
                  onClick={() => setShowForm(false)}>
                  Cancel
                </button>
              )}
            </div>
            <div>
              {addresses.length == 0 || showForm ? (
                <AddressForm />
              ) : (
                <div className="flex flex-col gap-y-3">
                  <RadioGroup defaultValue="0">
                    {addresses.map((address, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 border border-gray-700 p-4 rounded-[10px] cursor-pointer">
                        <RadioGroupItem
                          value={JSON.stringify(address)}
                          id={`${index}`}
                        />
                        <Label htmlFor={`${index}`} className="cursor-pointer">
                          <div className="flex flex-col gap-y-2 text-gray-800">
                            <p className="">
                              {address?.firstName} {address?.lastName}
                            </p>
                            <p className="">
                              {address?.streetAddress} | {address?.city} -{' '}
                              {address?.state.toUpperCase()}
                            </p>
                            <p className="">{address?.phoneNumber}</p>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <button
                    className="flex text-[14px]"
                    onClick={() => setShowForm(true)}>
                    <Plus height={20} width={20} /> Add Address
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="max-w-[378px] flex flex-col gap-y-[16px]">
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
            </div>
            <div className="bg-white px-[20px] py-[15px] rounded-[14px]">
              <h3 className="mb-[27px] text-[26px] font-medium font-inter">
                Payment Mode
              </h3>
              <RadioGroup defaultValue="card-payment">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card-payment" id="r1" />
                  <Label htmlFor="r1">Card Payment</Label>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <RadioGroupItem value="payment-on-delivery" id="r2" />
                  <Label htmlFor="r2">Payment On Delivery</Label>
                </div> */}
              </RadioGroup>
              <img src={PaystackImg} alt="" className="my-[17px]" />
              <p className="text-[#414141BD] text-[14px] font-ubuntu leading-[20px]">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <div className="my-[14px] flex items-center gap-x-[10px]">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsChecked}
                  onChange={(e) => {
                    setTermsChecked((e.target as HTMLInputElement).checked);
                  }}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  I have read and agree to the website's{' '}
                  <Link to={'/terms-of-service'} className="underline">
                    terms and conditions
                  </Link>
                </label>
              </div>
              <div className="flex flex-col gap-y-[11px]">
                <button
                  className="py-[15px] text-white font-medium bg-brand-orange rounded-[7px] cursor-pointer hover:bg-[#ffb285] disabled:bg-gray-300"
                  disabled={!termsChecked}
                  onClick={() => console.log('Terms', termsChecked)}>
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
