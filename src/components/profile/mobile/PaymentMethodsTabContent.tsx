import PaymentCard from './PaymentCard';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/desktop/Dialog';

const PaymentMethodsTabContent = () => {
  return (
    <div>
      <h3 className="mb-[19px] text-[19px] font-semibold">Payment Methods</h3>
      <div className="mb-[19px] flex flex-col gap-y-[36px]">
        <PaymentCard />
      </div>
      <Dialog>
        <DialogTrigger className="px-[36px] py-[15px] bg-brand-orange text-white text-[14px] font-semibold rounded-[7px]">
          Add New Card
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentMethodsTabContent;
