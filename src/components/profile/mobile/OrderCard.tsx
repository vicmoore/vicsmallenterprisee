import BraceletImg from '@/assets/images/bracelet.png';
const OrderCard = () => {
  return (
    <div className="mb-[43px] flex gap-x-[15px]">
      <img
        src={BraceletImg}
        alt=""
        className="h-[116px] w-auto rounded-[14px]"
      />
      <div className="">
        <h3 className="text-[17px] font-ubuntu font-medium">
          Fashion Front Classic Men Leather Multilayer Bracelet Brown
        </h3>
        <h2 className="my-[6px] text-[20px] font-inter font-bold">N 25,000</h2>
        <div className="font-semibold flex items-end gap-x-[155px]">
          <p className="px-[9px] py-[5px] bg-[#CAFED5] text-[#00BB29] text-[14px] font-bold font-inter rounded-[10px]">
            Delivered
          </p>
          <div className="flex gap-x-[11px]">
            <button className="h-[44px] px-[36px] bg-brand-orange text-white rounded-[7px]">
              Details
            </button>
            {/* <button className="h-[44px] px-[36px] text-brand-blue border border-brand-blue rounded-[7px]">
              Tracking
            </button> */}
            <button className="h-[44px] px-[36px] bg-brand-blue text-white rounded-[7px]">
              Write Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
