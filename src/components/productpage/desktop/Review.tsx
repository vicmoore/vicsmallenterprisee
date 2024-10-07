import Rating from '@/assets/icons/rating-4.png';

interface ReviewProps {
  firstName: string;
  lastName: string;
  date: string;
  comment: string;
  images: string[];
}
const Review = ({
  firstName,
  lastName,
  date,
  comment,
  images,
}: ReviewProps) => {
  return (
    <div className="mb-[70px]">
      <div className="">
        <h6 className="font-ubuntu font-medium text-[18px] capitalize">
          {firstName} {lastName}
        </h6>
        <div className="mb-[18px] flex items-center gap-x-[24px]">
          <img src={Rating} alt="" className="h-[18px] w-auto" />
          <p className="text-[#5D5D5D]">{date}</p>
        </div>
      </div>
      <p className="text-[#5D5D5D] font-ubuntu leading-[20px]">{comment}</p>
      {images && (
        <div className="mt-[17px] flex gap-x-[17px]">
          {images.map((image) => (
            <img src={image} alt="" className="w-[158px] rounded-[14px]" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
