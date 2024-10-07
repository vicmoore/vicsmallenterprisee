import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../../context/AuthContext';

// import GoogleLogo from '@/assets/icons/google-logo.png';
// import FacebookLogo from '@/assets/icons/facebook-logo.png';
import { LoaderIcon } from 'lucide-react';

const Login = () => {
  // @ts-ignore
  const { user, loginUser, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  const loginForm = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const email = loginForm.current!.email.value;
    const password = loginForm.current!.password.value;

    const userInfo = {
      email,
      password,
    };

    if (email !== '' || password !== '') {
      loginUser(userInfo);
    }
  };
  return (
    <div className="bg-[#F9F9F9] h-screen w-screen flex items-center">
      <div className="max-w-[541px] w-[86%] mx-auto pt-[55px] pb-[26px] bg-white rounded-lg">
        <h3 className="text-center text-[30px] mb-[54px]">
          Welcome to <span className="uppercase text-[#030359]">Vicsmall</span>
        </h3>
        <form
          ref={loginForm}
          onSubmit={handleSubmit}
          className="w-[92%] mx-auto">
          <label
            htmlFor=""
            className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
            Email or Phone Number
            <input
              type="text"
              id="email"
              className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
            />
          </label>
          <label
            htmlFor=""
            className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
            Password
            <input
              type="password"
              name=""
              id="password"
              className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
            />
          </label>
          <button
            disabled={loading}
            className={`${
              loading ? 'bg-[#ffbc95]' : 'bg-[#FF8C48]'
            } flex items-center justify-center text-white py-[10px] w-full rounded-lg`}>
            {loading ? <LoaderIcon /> : 'Login'}
          </button>
        </form>
        <div className="text-center mt-[41px] flex flex-col justify-center">
          {/* <>
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
          </> */}
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
