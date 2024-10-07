import { getUserDetails } from '@/services/BackendFunctions';
import { useEffect, useState } from 'react';

const ProfileDetails = () => {
  const [userDetails, setUserDetails] = useState<
    | {
        firstName: string;
        lastName: string;
        email: string;
      }
    | undefined
  >(undefined);

  const fetchUserDetails = async () => {
    try {
      const details = await getUserDetails();
      setUserDetails(details);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <>
      <h3 className="mb-[19px] text-[19px] font-semibold">Profile</h3>
      <div className="flex gap-x-[231px]">
        <div className="">
          <h3 className="mb-[10px] text-[20px] font-medium font-inter">
            First name
          </h3>
          <h4 className="text-[16px] capitalize">{userDetails?.firstName}</h4>
        </div>
        <div className="">
          <h3 className="mb-[10px] text-[20px] font-medium font-inter">
            Last name
          </h3>
          <h4 className="text-[16px] capitalize">{userDetails?.lastName}</h4>
        </div>
      </div>
      <div className="mt-[50px]">
        <h3 className="mb-[20px] text-[20px] font-medium font-inter">
          Email Address
        </h3>
        <h4 className="text-[16px]">{userDetails?.email}</h4>
      </div>
    </>
  );
};

export default ProfileDetails;
