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
const termsOfService = () => {
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
                <BreadcrumbPage>Terms Of Service</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="mb-[43px] text-[41px] text-center font-semibold">
          Terms Of Service
        </h1>
        <div className="max-w-[935px] mx-auto px-[32px] py-[41px] bg-[#F0F2F5] border-[9px] border-white rounded-[14px]">
          <h4 className="mb-[10px]">Introduction</h4>
          <p className="">
            We are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and share your personal information
            when you use our services.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default termsOfService;
