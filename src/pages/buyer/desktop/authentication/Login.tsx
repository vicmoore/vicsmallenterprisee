import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { account } from '@/appwriteconfig';

import { Eye, EyeOff, LoaderCircle } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const session = await account.getSession('current');
      if (session) {
        navigate('/');
      }
    };
    checkUser();
  }, []);

  const loginUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      await account.createEmailPasswordSession(user.email, user.password);
      navigate('/', { replace: true });
      setLoading(false);
    } catch {
      setError('Invalid email or password');
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#F9F9F9] h-screen w-screen flex items-center">
      <div className="max-w-[541px] w-[86%] mx-auto pt-[55px] pb-[26px] bg-white rounded-lg">
        <h3 className="text-center text-[30px] mb-[54px]">
          Welcome to <span className="uppercase text-[#030359]">Vicsmall</span>
        </h3>
        <form onSubmit={loginUser} className="w-[92%] mx-auto">
          <label
            htmlFor=""
            className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
            Email or Phone Number
            <input
              type="text"
              id="email"
              name="email"
              className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
              required
            />
          </label>
          <label
            htmlFor=""
            className="flex flex-col text-[#6E7191] font-medium relative">
            Password
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
              required
            />
            <span
              className="absolute right-3 top-1/2 cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
              {isPasswordVisible ? <Eye /> : <EyeOff />}
            </span>
          </label>
          <span className="block text-red-600 text-sm py-4">{error}</span>
          <button
            disabled={loading}
            className={`${
              loading ? 'bg-[#ffbc95]' : 'bg-[#FF8C48]'
            } flex items-center justify-center text-white py-[10px] w-full rounded-lg cursor-pointer`}>
            {loading ? <LoaderCircle className="animate-spin" /> : 'Login'}
          </button>
        </form>
        <div className="text-center mt-[41px] flex flex-col justify-center">
          <small className="">
            Don’t have an account?{' '}
            <Link to={'/sign-up'}>
              <span className="text-[#030359]">Sign up</span>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* <>
            <span className="flex items-center justify-center">
              <hr className="w-[25%]" />
              <small className="mx-[27px]">Or login with</small>
              <hr className="w-[25%]" />
            </span>
            <div className="flex justify-between flex-wrap w-[90%] max-w-[400px] mx-auto my-[31px]">
              <div className="w-[49%] h-[44px] flex items-center justify-center border border-[#3380DC6B] rounded-lg">
                <img src={GoogleLogo} alt="google logo" />
                <p className="text-xs font-medium ml-[8px]">Google</p>
              </div>
              <div className="w-[49%] h-[44px] flex items-center justify-center border border-[#3380DC6B] rounded-lg">
                <img src={FacebookLogo} alt="facebook logo" />
                <p className="text-xs font-medium ml-[8px]">Facebook</p>
              </div>
            </div>
          </> */
}
