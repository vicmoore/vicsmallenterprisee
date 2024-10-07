import { createContext, useContext, useState, useEffect } from 'react';
import { ID, Databases } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { account, client } from '@/appwriteconfig';

// @ts-ignore
const AuthContext = createContext();

const database = new Databases(client);

type userInfoRegister = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  password1: string;
  password2: string;
  userRole: string;
};
type userInfoLogin = {
  email: string;
  password: string;
};

const Database_ID = '6636974f0001f7636c25';
const User_Collection_ID = '664a44d00012a65504ef';
export const AuthProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(false);

  const navigate = useNavigate();

  useEffect(() => {
    checkUserStatus();
  }, []);

  // LOGIN FUNCTION
  const loginUser = async (userInfo: userInfoLogin) => {
    setLoading(true);

    try {
      // @ts-ignore
      let response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );

      let accountDetails = await account.get();

      setUser(accountDetails);
      navigate('/');
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  // LOGOUT FUNCTION
  const logoutUser = async () => {
    account.deleteSession('current');
    setUser(null);
  };

  // REGISTER FUNCTION
  const registerUser = async (userInfo: userInfoRegister) => {
    setLoading(true);
    try {
      // @ts-ignore
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password1,
        `${userInfo.firstName} ${userInfo.lastName}`
      );

      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password1
      );

      let accountDetails = await account.get();

      setUser(accountDetails);

      await database.createDocument(
        Database_ID,
        User_Collection_ID,
        accountDetails.$id,
        {
          email: userInfo.email,
          first_name: userInfo.firstName,
          last_name: userInfo.lastName,
          phone_number: `${userInfo.phoneNo ? userInfo.phoneNo : null}`,
          password: userInfo.password1,
          user_role: userInfo.userRole,
        }
      );
      navigate('/');
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  // CHECKUSERSTATUS FUNCTION
  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
      if (accountDetails) {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    checkUserStatus,
    loading,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
