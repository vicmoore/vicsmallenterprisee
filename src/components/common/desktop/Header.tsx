import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '@/assets/icons/logo.png';
import CartIcon from '@/assets/icons/cart-icon.png';
import SearchInput from './SearchInput';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/desktop/Select';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/common/desktop/DropdownMenu';

import { account } from '@/appwriteconfig';

import { UserContext, UserContextType } from '@/context/UserContext';
import { UserRound } from 'lucide-react';

const Header = () => {
  const [userSession, setUserSession] = useState(null);
  const { session } = useContext<UserContextType | null>(UserContext)!;

  useEffect(() => {
    //get user session
    setUserSession(session.$id);
  }, [session]);

  const navigate = useNavigate();

  const logoutUser = () => {
    //delete session
    const deleteSession = account.deleteSession('current');

    deleteSession.then(
      function () {
        //delete cart from localstorage
        localStorage.clear();
        setUserSession(null);
        navigate('/login');
      },
      function (error) {
        console.log(error);
      }
    );
  };
  return (
    <header>
      <div className="max-w-[1200px] mx-auto my-[17px] flex items-center justify-around">
        <Link to={'/'}>
          <img src={Logo} alt="" height={47} width={57} />
        </Link>

        <div className="w-[60%]">
          <SearchInput />
        </div>
        <span className="w-[30%] max-w-[210px] flex items-center justify-between">
          {/* Dropdown */}
          <Select>
            <SelectTrigger className="w-[75px]">
              <SelectValue placeholder="NGN" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">NGN</SelectItem>
              <SelectItem value="dark">USD</SelectItem>
            </SelectContent>
          </Select>

          <Link to={'/cart'}>
            <img src={CartIcon} alt="" />
          </Link>
          {/* Auth - login button/profile logo */}
          {userSession ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <UserRound className="cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to={'/profile'}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logoutUser}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              to={'/login'}
              className="px-[24px] py-[8px] border border-brand-blue text-brand-blue rounded-xl hover:bg-brand-orange duration-500">
              Login
            </Link>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
