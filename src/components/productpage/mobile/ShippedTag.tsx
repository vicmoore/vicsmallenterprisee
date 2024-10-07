import PlaneIconBlue from '@/assets/icons/plane-icon-blue.svg';

const ShippedTag = () => {
  return (
    <span className="bg-brand-orange w-fit px-[7px] py-[3px] flex gap-x-[4px] rounded-[16px]">
      <p className="text-[13px] text-brand-blue font-inter font-medium">
        Shipped From Abroad
      </p>
      <img src={PlaneIconBlue} alt="" className="" />
    </span>
  );
};

export default ShippedTag;
