import Reviews from './Reviews';
import Rating from '@/assets/icons/rating-4.png';

const ReviewsTab = () => {
  return (
    <>
      <div className="px-[20px] pt-[18px]">
        <div className="flex">
          <div className="flex items-center gap-x-[15px]">
            <h2 className="pl-[24px] text-[40px] font-semibold font-inter">
              4.0
            </h2>
            <div className="flex flex-col justify-between">
              <img src={Rating} alt="" className="h-[21px]" />
              <p className="text-[#606060] text-[14px]">2000 Ratings</p>
            </div>
          </div>
        </div>
        <div className="mx-auto pb-[40px]">
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default ReviewsTab;
