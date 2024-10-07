import { Link } from 'react-router-dom';

const CategoriesBar = () => {
  const categories = [
    {
      name: 'Accessories',
      link: '/categories/accessories',
    },
    {
      name: 'Beanies',
      link: '/categories/beanies',
    },
    {
      name: 'Boots',
      link: '/categories/boots',
    },
    {
      name: 'Games & Consoles',
      link: '/categories/games-and-consoles',
    },
    {
      name: 'Gym',
      link: '/categories/gym',
    },
    {
      name: 'Head Wear',
      link: '/categories/head-wear',
    },
    {
      name: 'Hoodies',
      link: '/categories/hoodies',
    },
    {
      name: 'Jerseys',
      link: '/categories/jerseys',
    },
    {
      name: 'Jumpsuits',
      link: '/categories/jumpsuits',
    },
    {
      name: 'Mens Clothing',
      link: '/categories/mens-clothing',
    },
    {
      name: 'All Categories',
      link: '/categories',
    },
  ];
  return (
    <>
      <div className="bg-[#1E1E1E] text-[#FFFFFF] py-[10px] overflow-x-scroll hide-bar">
        <ul className="w-[1085px] mx-auto flex justify-around">
          {categories.map((category, index) => (
            <Link to={category.link} key={index}>
              <li className="" key={index}>
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoriesBar;
