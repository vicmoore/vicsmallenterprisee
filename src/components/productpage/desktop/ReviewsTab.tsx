import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/desktop/Tabs';
import Reviews from './Reviews';
import Rating from '@/assets/icons/rating-4.png';
const ReviewsTab = () => {
  const tabs = [
    {
      name: 'all reviews',
      value: 'all-reviews',
      reviews: 2000,
    },
    {
      name: 'with images',
      value: 'with-images',
      reviews: 340,
    },
    {
      name: '5 star',
      value: '5-star',
      reviews: 1200,
    },
    {
      name: '4 star',
      value: '4-star',
      reviews: 100,
    },
    {
      name: '3 star',
      value: '3-star',
      reviews: 500,
    },
    {
      name: '2 star',
      value: '2-star',
      reviews: 200,
    },
    {
      name: '1 star',
      value: '1-star',
      reviews: 0,
    },
  ];
  return (
    <>
      <div className="px-[98px]">
        <div className="flex gap-x-[145px]">
          <div className="">
            <div className="flex items-center gap-x-[15px]">
              <h2 className="text-[82px] font-semibold font-inter">4.0</h2>
              <img src={Rating} alt="" className="" />
            </div>
            <p className="text-[#606060] text-[18px]">2000 Ratings</p>
          </div>
          <div className="flex flex-col gap-y-[26px]">
            <div className="flex items-center gap-x-[12px]">
              <p className="min-w-[53px]">5 Star</p>
              <div className="h-[12px] w-[312px] bg-[#EAEAEA] rounded-[10px] relative">
                <div className="h-full w-[60%] bg-brand-orange rounded-[10px] absolute"></div>
              </div>
              <p className="text-[#8A8A8A] text-[14px]">1200 Reviews</p>
            </div>
            <div className="flex items-center gap-x-[12px]">
              <p className="min-w-[53px]">4 Star</p>
              <div className="h-[12px] w-[312px] bg-[#EAEAEA] rounded-[10px] relative">
                <div className="h-full w-[5%] bg-brand-orange rounded-[10px] absolute"></div>
              </div>
              <p className="text-[#8A8A8A] text-[14px]">100 Reviews</p>
            </div>
            <div className="flex items-center gap-x-[12px]">
              <p className="min-w-[53px]">3 Star</p>
              <div className="h-[12px] w-[312px] bg-[#EAEAEA] rounded-[10px] relative">
                <div className="h-full w-[25%] bg-brand-orange rounded-[10px] absolute"></div>
              </div>
              <p className="text-[#8A8A8A] text-[14px]">500 Reviews</p>
            </div>
            <div className="flex items-center gap-x-[12px]">
              <p className="min-w-[53px]">2 Star</p>
              <div className="h-[12px] w-[312px] bg-[#EAEAEA] rounded-[10px] relative">
                <div className="h-full w-[10%] bg-brand-orange rounded-[10px] absolute"></div>
              </div>
              <p className="text-[#8A8A8A] text-[14px]">200 Reviews</p>
            </div>
            <div className="flex items-center gap-x-[12px]">
              <p className="min-w-[53px]">1 Star</p>
              <div className="h-[12px] w-[312px] bg-[#EAEAEA] rounded-[10px] relative">
                <div className="h-full w-0 bg-brand-orange rounded-[10px] absolute"></div>
              </div>
              <p className="text-[#8A8A8A] text-[14px]">0 Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="max-w-[1110px] mx-auto my-[40px]" />
      <div className="max-w-[1000px] mx-auto pb-[40px]">
        <Tabs defaultValue="all-reviews">
          <TabsList className="bg-transparent gap-x-[10px]">
            {tabs.map((tab) => (
              <TabsTrigger
                value={tab.value}
                className="capitalize border border-[#00000036] bg-white text-black data-[state=active]:bg-[#FFEADE] data-[state=active]:text-brand-orange data-[state=active]:border-brand-orange rounded-[40px]">
                {tab.name} ({tab.reviews})
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="all-reviews">
            <Reviews />
          </TabsContent>
          <TabsContent value="with-images">
            <Reviews />
          </TabsContent>
          <TabsContent value="5-star">
            <Reviews />
          </TabsContent>
          <TabsContent value="4-star">
            <Reviews />
          </TabsContent>
          <TabsContent value="3-star">
            <Reviews />
          </TabsContent>
          <TabsContent value="2-star">
            <Reviews />
          </TabsContent>
          <TabsContent value="1-star">
            <Reviews />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ReviewsTab;
