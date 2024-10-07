import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const SignUp = () => {
  // @ts-ignore
  const { user, registerUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  const registerForm = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const firstName =
      registerForm.current!.usersFirstName.value.toLocaleLowerCase();
    const lastName =
      registerForm.current!.usersLastName.value.toLocaleLowerCase();
    const email = registerForm.current!.email.value.toLocaleLowerCase();
    const phoneNo = registerForm.current!.phoneNo.value;
    const password1 = registerForm.current!.password.value;
    const password2 = registerForm.current!.confirmPassword.value;
    const userRole = 'buyer';

    if (password1 !== password2) {
      alert('Passwords did not match!');
      return;
    }

    const userInfo = {
      firstName,
      lastName,
      email,
      phoneNo,
      password1,
      password2,
      userRole,
    };

    // console.log(userInfo);
    registerUser(userInfo);
  };
  return (
    <div>
      <div className="bg-[#F9F9F9] h-screen w-screen flex items-center">
        <div className="max-w-[541px] w-[86%] mx-auto pt-[55px] pb-[26px] bg-white rounded-lg">
          <h3 className="text-center text-[30px] mb-[54px]">
            Signup to <span className="uppercase text-[#030359]">Vicsmall</span>
          </h3>
          <form
            ref={registerForm}
            onSubmit={handleSubmit}
            className="w-[92%] mx-auto">
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
                className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              Phone Number
              <input
                type="tel"
                id="phoneNo"
                className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
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
                name=""
                id="password"
                className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
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
                name=""
                id="confirmPassword"
                className="bg-[#EFEFEF] rounded-lg px-3 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#030359]"
              />
            </label>
            <button className="bg-[#FF8C48] flex items-center justify-center text-white py-[10px] w-full rounded-lg">
              Signup
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
