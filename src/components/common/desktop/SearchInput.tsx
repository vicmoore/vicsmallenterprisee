import { useState } from 'react';
import SearchIcon from '@/assets/icons/search-icon.png';

const SearchInput = () => {
  const [query, setQuery] = useState('');

  const loadSearchResults = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      window.location.href = `/catalog/?${query}`;
    }
  };
  return (
    <>
      <div className="bg-[#EFEFEF] w-full px-[16px] py-[12px] rounded-xl flex items-center">
        <img src={SearchIcon} alt="" className="" />
        <input
          type="search"
          className="bg-[#EFEFEF] flex-grow px-3 focus-visible:outline-none"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={loadSearchResults}
        />
      </div>
    </>
  );
};

export default SearchInput;
