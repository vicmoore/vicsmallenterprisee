import Header from '@/components/common/mobile/Header';
import CategoriesBar from '@/components/common/mobile/CategoriesBar';
import Footer from '@/components/common/mobile/Footer';

const termsOfService = () => {
  return (
    <>
      <Header />
      <CategoriesBar />
      <section className="bg-[#F9F9F9] pb-[154px]">
        <h1 className="my-[25px] text-[24px] text-center font-semibold">
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
