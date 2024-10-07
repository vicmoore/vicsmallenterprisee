import { Link } from 'react-router-dom';
import PlaneIcon from '@/assets/icons/plane-icon.png';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  discount: number;
  shipped: boolean;
  link: string;
}
const ProductCard = ({
  image,
  name,
  price,
  discount,
  shipped,
  link,
}: ProductCardProps) => {
  return (
    <Link to={link} className="block relative font-ubuntu">
      <div className="bg-white w-full px-[8px] pt-[8px] rounded-[11px]">
        <img src={image} alt="" className="w-full h-44 rounded-[11px]" />
        <div className="mt-[16px] flex items-center justify-between">
          <h4 className="text-[#474747] w-[70%] truncate">{name}</h4>
          {shipped && <img src={PlaneIcon} alt="" />}
        </div>
        <span className="flex justify-between">
          {discount ? (
            <>
              <h3 className="text-[16px]">N {price - price * discount}</h3>
              <h3 className="text-[13px] text-red-600 line-through">
                N {price}
              </h3>
            </>
          ) : (
            <>
              <h3 className="text-[16px]">N {price}</h3>
            </>
          )}
        </span>
      </div>
      {/* <span
        className="bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center absolute top-4 right-4 cursor-pointer"
        onClick={() => {
          console.log('added to cart');
        }}>
        <img src={CartIcon} alt="" height={20} width={20} />
      </span> */}
    </Link>
  );
};

export default ProductCard;
