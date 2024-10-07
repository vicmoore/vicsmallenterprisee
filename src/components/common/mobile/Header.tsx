// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/common/mobile/Select';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/common/mobile/DropdownMenu';

import { Link } from 'react-router-dom';
import { UserRound } from 'lucide-react';

import SearchInput from '@/components/common/mobile/SearchInput';

import CartIcon from '@/assets/icons/cart-icon.png';

import { useAuth } from '@/context/AuthContext';

const Header = () => {
  // @ts-ignore
  const { user, logoutUser } = useAuth();
  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <Link to={'/'}>
          <h3 className="uppercase text-brand-blue">Vicsmall</h3>
        </Link>
        <span className="w-[54%] max-w-[212px] flex items-center justify-end gap-x-[10px]">
          <Link to={'/cart'}>
            <img src={CartIcon} alt="" />
          </Link>
          {/* Auth - login button/profile logo */}
          {user ? (
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
              className="px-[24px] py-[5px] text-[13px] border border-brand-blue text-brand-blue rounded-[9px]">
              Login
            </Link>
          )}
        </span>
      </div>
      <div className="mt-3">
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
