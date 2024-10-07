import { Link } from 'react-router-dom';

const Footer = () => {
  const menu = [
    {
      name: 'My Account',
      link: '/profile',
    },
    {
      name: 'Contact Us',
      link: '/contact-us',
    },
    {
      name: 'Refunds and Returns',
      link: '/refund-and-returns',
    },
    {
      name: 'Terms of Service',
      link: '/terms-of-service',
    },
    {
      name: 'FAQs',
      link: '/faqs',
    },
  ];
  return (
    <div>
      <div className="bg-brand-blue text-white pt-[47px] pb-[8px]">
        <div className="max-w-[1200px] mx-auto mb-[38px] flex items-center justify-around">
          <div className="w-[90%] flex justify-around flex-wrap gap-y-[20px]">
            {menu.map((item, index) => (
              <Link to={item.link} className="text-[14px]" key={index}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center">
          <small>Vicsmall 2024</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
