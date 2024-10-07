import SearchIcon from '@/assets/icons/search-icon.png';

const SearchInput = () => {
  return (
    <>
      <div className="bg-[#EFEFEF] w-full px-[16px] py-[12px] rounded-xl flex items-center">
        <img src={SearchIcon} alt="" className="" />
        <input
          type="search"
          className="w-full bg-[#EFEFEF] flex-grow px-3 focus-visible:outline-none"
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default SearchInput;
