import Header from '@/components/common/desktop/Header';
import CategoriesBar from '@/components/common/desktop/CategoriesBar';
import Footer from '@/components/common/desktop/Footer';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/common/desktop/BreadCrumbs';

import WomanOnPhone from '@/assets/images/woman-on-phone.png';
import PhoneIcon from '@/assets/icons/phone.svg';
const ContactUs = () => {
  return (
    <>
      <Header />
      <CategoriesBar />
      <section className="bg-[#F9F9F9] pb-[154px]">
        <div className="max-w-[1200px] mx-auto py-[21px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Faqs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="h-[743px] max-w-[1147px] mx-auto flex rounded-[14px] bg-white">
          <div className="h-full w-[479px]">
            <img src={WomanOnPhone} alt="" className="w-full" />
          </div>
          <div className="w-[668px] px-[47px] py-[44px]">
            <h3 className="mb-[23px] text-[32px] font-semibold leading-[23px]">
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
