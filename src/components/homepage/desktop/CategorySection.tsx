import RightArrow from '@/assets/icons/right-arrow-icon-white.svg';

const CategorySection = () => {
  return (
    <section className="pt-[45px] pb-[78px] relative bg-white">
      <h2 className="mb-[25px] text-[47px] text-white font-medium text-center">
        For the ladies
      </h2>
      <div className="max-w-[1196px] mx-auto flex items-center justify-around">
        <div className="bg-brand-orange h-[100px] w-[400px]">
          <h5 className="">Shoes</h5>
        </div>
      </div>
      <div className="mt-[44px] flex justify-center">
        <button className="px-[25px] py-[14px] text-white text-[20px] font-semibold flex items-center border border-white rounded-[7px]">
          View More <img src={RightArrow} alt="" className="ml-[8px]" />
        </button>
      </div>
    </section>
  );
};

export default CategorySection;
