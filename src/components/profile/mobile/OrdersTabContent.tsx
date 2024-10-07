import OrderCard from './OrderCard';

const OrdersTabContent = () => {
  return (
    <div>
      <h3 className="mb-[19px] text-[19px] font-semibold">Orders</h3>
      <OrderCard />
      <OrderCard />
    </div>
  );
};

export default OrdersTabContent;
