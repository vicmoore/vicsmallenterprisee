import { useContext } from 'react';
import CartContext from '@/context/CartContext';
import TrashIcon from '@/assets/icons/trash-icon.svg';
const CartItem = ({ item, amount, updateAmount }: any) => {
  // @ts-ignore
  const { removeItemFromCart } = useContext(CartContext);
  function addCommas(num: number): string {
    return num.toLocaleString();
  }
  return (
    <>
      <img src={item.image} alt="" className="h-[121px] w-[121px]" />
      <div className="mr-[76px] self-start">
        <h5 className="mb-[15px] text-[17px] font-medium font-inter">
          {item.name}
        </h5>
        <div className="flex items-center gap-x-[15px]">
          <span className="flex gap-x-[10px]">
            <button
              className="h-[22px] w-[22px] bg-red-600 text-white rounded-[5px]"
              onClick={() => {
                if (amount > 1) {
                  updateAmount(amount - 1);
                }
              }}>
              -
            </button>
            <span className="min-w-[23px] text-center">{amount}</span>
            <button
              className="h-[22px] w-[22px] bg-green-600 text-white rounded-[5px]"
              onClick={() => {
                updateAmount(amount + 1);
              }}>
              +
            </button>
          </span>
          <h5 className="text-[20px] font-bold font-inter">
            N {addCommas(item.price * amount)}
          </h5>
        </div>
      </div>
      <img
        src={TrashIcon}
        alt=""
        className="cursor-pointer"
        onClick={() => {
          removeItemFromCart(item.id);
        }}
      />
    </>
  );
};

export default CartItem;
