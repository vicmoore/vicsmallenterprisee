const CategoriesBar = () => {
  const categories: string[] = [
    'Accessories',
    'Beanies',
    'Boots',
    'Games & Consoles',
    'Gym',
    'Head Wear',
    'Hoodies',
    'Jerseys',
    'Jumpsuits',
    'Mens Clothing',
    'All Categories',
  ];
  return (
    <>
      <div className="bg-[#1E1E1E] text-[#FFFFFF] py-[10px] overflow-x-scroll hide-bar">
        <ul className="w-[1085px] mx-auto flex justify-around">
          {categories.map((category, index) => (
            <li className="text-[13px]" key={index}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoriesBar;
