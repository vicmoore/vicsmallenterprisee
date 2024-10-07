import { useContext, useEffect, useState } from 'react';
import { Button } from '@/components/common/desktop/Button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/common/desktop/Select';
import { databases } from '@/appwriteconfig';
import UserContext from '@/context/UserContext';
import { useToast } from '@/components/hooks/useToast';
import { LoaderCircle } from 'lucide-react';
import { getUserAddresses } from '@/services/BackendFunctions';

export function AddressForm() {
  const { userDetails } = useContext(UserContext) || {};
  const { toast } = useToast();

  const showToast = (title: string, description: string) => {
    toast({
      title: title,
      description: description,
    });
  };

  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    state: '',
    city: '',
    streetAddress: '',
    phoneNumber: '',
  });

  const states = [
    'Abia',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'FCT - Abuja',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara',
  ];
  useEffect(() => {
    getUserAddresses(userDetails?.$id).then((res) => {
      setAddresses(JSON.parse(res));
    });
  }, [userDetails]);
  const handleSubmitAddress = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const addressStr = JSON.stringify([...addresses, address]); // Convert object to JSON address
    const promise = databases.updateDocument(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_USER_COLLECTION_ID,
      userDetails?.$id,
      {
        address: addressStr,
      }
    );

    promise.then(
      function (_response) {
        setLoading(false);
        console.log('Document updated successfully');
        window.location.reload();
      },
      function (error) {
        setLoading(false);
        showToast('Error', error.message);
        console.error('Error creating document:', error);
      }
    );
  };
  return (
    <>
      <form className="space-y-8" onSubmit={handleSubmitAddress}>
        <span className="flex gap-x-[31px]">
          <div className="flex-grow">
            <label className="font-inter font-medium" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="bg-[#EFEFEF] focus-visible:outline-0 font-medium p-2 text-[14px] rounded-[6px]"
              onChange={(e) => {
                setAddress({ ...address, firstName: e.target.value });
              }}
            />
          </div>
          <div className="flex-grow">
            <label className="font-inter font-medium" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="bg-[#EFEFEF] focus-visible:outline-0 font-medium p-2 text-[14px] rounded-[6px]"
              onChange={(e) => {
                setAddress({ ...address, lastName: e.target.value });
              }}
            />
          </div>
        </span>
        <span className="flex items-end gap-x-[31px]">
          <div className="flex-grow">
            <label className="font-inter font-medium" htmlFor="state">
              State
            </label>
            <Select
              onValueChange={(value) => {
                setAddress({
                  ...address,
                  state: value,
                });
              }}>
              <SelectTrigger>
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state.toLowerCase()}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col flex-grow">
            <label className="font-inter font-medium" htmlFor="city">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="bg-[#EFEFEF] focus-visible:outline-0 font-medium p-2 text-[14px] rounded-[6px]"
              onChange={(e) => {
                setAddress({ ...address, city: e.target.value });
              }}
            />
          </div>
        </span>
        <span className="flex gap-x-[31px]">
          <div className="flex flex-col flex-grow">
            <label className="font-inter font-medium" htmlFor="streetAddress">
              Street Address
            </label>
            <input
              id="streetAddress"
              name="streetAddress"
              type="text"
              className="bg-[#EFEFEF] focus-visible:outline-0 font-medium p-2 text-[14px] rounded-[6px]"
              onChange={(e) => {
                setAddress({ ...address, streetAddress: e.target.value });
              }}
            />
          </div>
        </span>
        <span className="flex gap-x-[31px]">
          <div className="flex flex-col">
            <label className="font-inter font-medium" htmlFor="phoneNo">
              Phone Number
            </label>
            <input
              id="phoneNo"
              name="phoneNo"
              type="phone"
              className="bg-[#EFEFEF] focus-visible:outline-0 font-medium p-2 text-[14px] rounded-[6px]"
              onChange={(e) => {
                setAddress({ ...address, phoneNumber: e.target.value });
              }}
            />
          </div>
        </span>
        <Button
          type="submit"
          className="w-full font-poppins font-semibold border border-brand-blue bg-white text-brand-blue hover:text-white hover:bg-brand-blue">
          {loading ? <LoaderCircle className="animate-spin" /> : 'Add Address'}
        </Button>
      </form>
    </>
  );
}
