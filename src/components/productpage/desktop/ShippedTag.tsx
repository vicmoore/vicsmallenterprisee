import PlaneIconBlue from '@/assets/icons/plane-icon-blue.svg';

const ShippedTag = () => {
  return (
    <span className="bg-brand-orange rounded-[18px] px-[7px] py-[3px] flex gap-x-[9px] absolute top-[12px]">
      <p className="text-[14px] text-brand-blue font-inter font-medium">
        Shipped From Abroad
      </p>
      <img src={PlaneIconBlue} alt="" className="" />
    </span>
  );
};

export default ShippedTag;
