import Header from '@/components/common/mobile/Header';
// import CategoriesBar from '@/components/common/mobile/CategoriesBar';
import Footer from '@/components/common/mobile/Footer';

import WomanOnPhone from '@/assets/images/woman-on-phone.png';
import PhoneIcon from '@/assets/icons/phone.svg';
const ContactUs = () => {
  return (
    <>
      <Header />
      <section className="bg-[#F9F9F9] pt-[40px] pb-[100px]">
        <div className="mx-auto rounded-[14px]">
          <div className="h-[229px] w-[341px] mx-auto rounded-[10px] flex items-center justify-center overflow-hidden">
            <img src={WomanOnPhone} alt="" className="w-full" />
          </div>
          <div className="px-[25px] py-[44px]">
            <h3 className="mb-[23px] text-[25px] font-semibold leading-[23px]">
              Contact Us
            </h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Elit dui diam condimentum
              egestas et eu neque feugiat. Tellus pellentesque non lacus urna
              Lorem ipsum dolor sit amet consectetur. Elit dui diam condimentum
              egestas et eu neque feugiat. Tellus pellentesque non lacus urna
            </p>
            <button className="h-[48px] mt-[18px] px-[36px] bg-brand-orange text-white flex items-center gap-x-[8px] rounded-[7px]">
              Call Us <img src={PhoneIcon} alt="" />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
