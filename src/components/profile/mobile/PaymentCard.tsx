import DeleteIcon from '@/assets/icons/trash.svg';
import EditIcon from '@/assets/icons/edit.svg';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/desktop/Dialog';
const PaymentCard = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <p className="mb-[8px] font-ubuntu text-[17px] text-[#7B7B7B]">
          Favour Andrew Udoh
        </p>
        <p className="mb-[8px] font-inter font-bold text-[17px]">
          7748 4948 2293 2200
        </p>
        <p className="font-ubuntu text-[#7B7B7B] text-[17px]">Visa Card</p>
      </div>
      <div className="flex flex-col justify-around">
        <Dialog>
          <DialogTrigger className="">
            <img src={DeleteIcon} alt="" className="" />
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
        <Dialog>
          <DialogTrigger className="">
            <img src={EditIcon} alt="" className="" />
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
    </div>
  );
};

export default PaymentCard;
