import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ID, Databases } from 'appwrite';
import { LoaderIcon } from 'lucide-react';

import { account, client } from '@/appwriteconfig';
const SignUp = () => {
  // @ts-ignore
  const [UserDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  const database = new Databases(client);

  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    password: '',
    confirmPassword: '',
    userRole: 'buyer',
  });

  useEffect(() => {
    const checkUser = async () => {
      const session = await account.getSession('current');
      if (session) {
        navigate('/');
      }
    };
    checkUser();
  }, []);

  const signUpUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        `${userInfo.firstName} ${userInfo.lastName}`
      );

      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );

      await database.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        userData.$id,
        {
          email: userInfo.email,
          first_name: userInfo.firstName,
          last_name: userInfo.lastName,
          phone_number: userInfo.phoneNo ? userInfo.phoneNo : null,
          password: userInfo.password,
          user_role: userInfo.userRole,
        }
      );
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-[#F9F9F9] py-[60px] flex items-center justify-center">
        <div className="max-w-[541px] w-[86%] mx-auto pt-[55px] pb-[26px] bg-white rounded-lg">
          <h3 className="text-center text-[30px] mb-[54px]">
            Signup to <span className="uppercase text-[#030359]">Vicsmall</span>
          </h3>
          <form onSubmit={signUpUser} className="w-[92%] mx-auto">
            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              <span className="flex">
                First Name <p className="text-red-600">*</p>
              </span>
              <input
                id="firstName"
                name="usersFirstName"
                className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    firstName: e.target.value,
                  });
                }}
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              <span className="flex">
                Last Name <p className="text-red-600">*</p>
              </span>
              <input
                id="lastName"
                name="usersLastName"
                className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    lastName: e.target.value,
                  });
                }}
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              <span className="flex">
                Email <p className="text-red-600">*</p>
              </span>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    email: e.target.value,
                  });
                }}
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              Phone Number
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    phoneNo: e.target.value,
                  });
                }}
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              <span className="flex">
                Password <p className="text-red-600">*</p>
              </span>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    password: e.target.value,
                  });
                }}
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              <span className="flex">
                Confirm Password <p className="text-red-600">*</p>
              </span>
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    confirmPassword: e.target.value,
                  });
                }}
              />
            </label>
            <button
              disabled={loading}
              className={`${
                loading ? 'bg-[#ffbc95]' : 'bg-[#FF8C48]'
              } flex items-center justify-center text-white py-[10px] w-full rounded-lg cursor-pointer`}>
              {loading ? <LoaderIcon /> : 'Signup'}
            </button>
          </form>
          <div className="text-center mt-[41px] flex flex-col justify-center">
            <small className="">
              Have an account?{' '}
              <span className="text-[#030359]">
                <Link to={'/login'}>Login</Link>
              </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
