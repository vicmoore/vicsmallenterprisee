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
const AddressCard = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <h3 className="mb-[8px] font-bold font-inter text-[19px]">
          No. 35 Plaza Road Uyo
        </h3>
        <h4 className="mb-[8px] font-ubuntu text-[#7B7B7B] text-[17px]">
          Akwa-Ibom State
        </h4>
        <h4 className="font-ubuntu text-[#7B7B7B] text-[17px]">
          0814 333 8983
        </h4>
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

export default AddressCard;
