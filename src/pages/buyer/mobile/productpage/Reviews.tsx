import { ArrowLeft } from 'lucide-react';

import Review from '../../../../components/productpage/mobile/Review';
import Bracelet from '@/assets/images/bracelet.png';
import Rating from '@/assets/icons/rating-4.png';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
  const reviews = [
    {
      firstName: 'alex',
      lastName: 'paxwel',
      rating: 4,
      date: '4th March 2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Vitae donec urna rutrum curabitur. Vestibulum lectus quis ac nunc nibh luctus vitae libero varius. Urna bibendum quis velit blandit sed lectus nibh nibh. Elementum elementum id magna vitae id eget nisi non. Nibh tincidunt commodo fermentum pulvinar donec vitae tincidunt et. Nisl congue eu ut eu natoque ac egestas. Integer sit neque commodo orci. Est ipsum massa feugiat ullamcorper sit mauris donec tempor quam. Est donec urna vel eget ut venenatis. At felis ut mauris nullam dui urna consequat duis.',
      images: [Bracelet, Bracelet],
    },
    {
      firstName: 'mathew',
      lastName: 'thew',
      rating: 4,
      date: '4th March 2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Vitae donec urna rutrum curabitur. Vestibulum lectus quis ac nunc nibh luctus vitae libero varius. Urna bibendum quis velit blandit sed lectus nibh nibh. Elementum elementum id magna vitae id eget nisi non. Nibh tincidunt commodo fermentum pulvinar donec vitae tincidunt et. Nisl congue eu ut eu natoque ac egestas. Integer sit neque commodo orci. Est ipsum massa feugiat ullamcorper sit mauris donec tempor quam. Est donec urna vel eget ut venenatis. At felis ut mauris nullam dui urna consequat duis.',
      images: [],
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="pb-[30px]">
      <div className="px-[20px] pt-[25px] pb-[10px] flex items-center gap-x-[20px]">
        <ArrowLeft onClick={() => navigate(-1)} />
        <h3 className="text-[24px] leading-none">Reviews</h3>
      </div>
      <div className="px-[20px]">
        <div className="my-[15px] flex items-center gap-x-[15px]">
          <h2 className="pl-[24px] text-[40px] text-black font-semibold font-inter">
            4.0
          </h2>
          <div className="flex flex-col justify-between">
            <img src={Rating} alt="" className="h-[21px]" />
            <p className="text-[#606060] text-[14px] text-left">2000 Ratings</p>
          </div>
        </div>
        <div className="mb-[30px] flex flex-col gap-y-[13px]">
          <div className="flex items-center gap-x-[12px]">
            <p className="min-w-[53px] text-[12px]">5 Star</p>
            <div className="h-[12px] grow bg-[#EAEAEA] rounded-[10px] relative">
              <div className="h-full w-[60%] bg-brand-orange rounded-[10px] absolute"></div>
            </div>
            <p className="min-w-[95px] text-[#8A8A8A] text-[12px] text-right">
              1200 Reviews
            </p>
          </div>
          <div className="flex items-center gap-x-[12px]">
            <p className="min-w-[53px] text-[12px]">4 Star</p>
            <div className="h-[12px] grow bg-[#EAEAEA] rounded-[10px] relative">
              <div className="h-full w-[5%] bg-brand-orange rounded-[10px] absolute"></div>
            </div>
            <p className="min-w-[95px] text-[#8A8A8A] text-[12px] text-right">
              100 Reviews
            </p>
          </div>
          <div className="flex items-center gap-x-[12px]">
            <p className="min-w-[53px] text-[12px]">3 Star</p>
            <div className="h-[12px] grow bg-[#EAEAEA] rounded-[10px] relative">
              <div className="h-full w-[25%] bg-brand-orange rounded-[10px] absolute"></div>
            </div>
            <p className="min-w-[95px] text-[#8A8A8A] text-[12px] text-right">
              500 Reviews
            </p>
          </div>
          <div className="flex items-center gap-x-[12px]">
            <p className="min-w-[53px] text-[12px]">2 Star</p>
            <div className="h-[12px] grow bg-[#EAEAEA] rounded-[10px] relative">
              <div className="h-full w-[10%] bg-brand-orange rounded-[10px] absolute"></div>
            </div>
            <p className="min-w-[95px] text-[#8A8A8A] text-[12px] text-right">
              200 Reviews
            </p>
          </div>
          <div className="flex items-center gap-x-[12px]">
            <p className="min-w-[53px] text-[12px]">1 Star</p>
            <div className="h-[12px] grow bg-[#EAEAEA] rounded-[10px] relative">
              <div className="h-full w-0 bg-brand-orange rounded-[10px] absolute"></div>
            </div>
            <p className="min-w-[95px] text-[#8A8A8A] text-[12px] text-right">
              0 Reviews
            </p>
          </div>
        </div>
        <div className="mb-[40px] flex flex-col gap-y-[70px]">
          {reviews.map((review) => (
            <Review
              firstName={review.firstName}
              lastName={review.lastName}
              date={review.date}
              comment={review.comment}
              images={review.images}
            />
          ))}
        </div>
        <button className="block mx-auto px-[30px] py-[10px] text-brand-blue font-semibold rounded-[7px] border border-brand-blue">
          View More
        </button>
      </div>
    </div>
  );
};

export default Reviews;
