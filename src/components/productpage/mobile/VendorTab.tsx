import ProductCard from '@/components/common/mobile/ProductCard';

import BraceletImg from '@/assets/images/bracelet.png';
const VendorTab = () => {
  return (
    <>
      <div className="ml-[31px] my-[43px]">
        <h3 className="text-[24px] font-ubuntu font-medium">Hozier Hactor</h3>
        <p className="text-[#e2c0c0] font-inter">{40} Products Posted</p>
      </div>
      <hr className="max-w-[90%] mx-auto" />
      <div className="max-w-[90%] mx-auto mt-[30px] pb-[28px]">
        <h3 className="mb-[20px] text-[26px] font-medium">Products Listed</h3>
        <div className="mb-[35px] flex flex-wrap gap-x-[10px] gap-y-[40px]">
          {Array.from({ length: 15 }).map((_) => (
            <ProductCard
              image={BraceletImg}
              name="Bracelet"
              price={34000}
              discount={0}
              shipped={true}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="px-[30px] py-[10px] text-brand-blue font-semibold rounded-[7px] border border-brand-blue">
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default VendorTab;
