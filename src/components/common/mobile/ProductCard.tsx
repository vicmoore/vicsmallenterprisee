import { Link } from 'react-router-dom';
import PlaneIcon from '@/assets/icons/plane-icon.png';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  discount: number | null;
  shipped: boolean;
}
const ProductCard = ({
  image,
  name,
  price,
  discount,
  shipped,
}: ProductCardProps) => {
  return (
    <Link to={'/product'} className={`relative font-ubuntu`}>
      <div className={`bg-white w-full px-[4px] pt-[4px] rounded-[11px]`}>
        <img src={image} alt="" className="object-cover rounded-[11px]" />
        <div className="mt-[16px] flex items-center justify-between">
          <h4 className="text-[#474747] w-[70%] truncate">{name}</h4>
          {shipped && <img src={PlaneIcon} alt="" height={12} />}
        </div>
        {discount ? (
          <span className="font-ubuntu flex items-center justify-between">
            <h3 className={`text-[14px] font-medium`}>
              N {price - price * discount}
            </h3>
            <h3 className={`text-[12px] text-red-600 line-through`}>
              N {price}
            </h3>
          </span>
        ) : (
          <>
            <h3 className={`text-[14px] font-medium`}>N {price}</h3>
          </>
        )}
      </div>
      {/* <span className="bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center absolute top-4 right-4 cursor-pointer">
        <img src={CartIcon} alt="" height={17} width={17} />
      </span> */}
    </Link>
  );
};

export default ProductCard;
