import { Link } from 'react-router-dom';

import { Facebook, Instagram, Mastercard, Visa } from './Icons';
import FooterLogo from '@/assets/icons/footer-logo.png';

const Footer = () => {
  return (
    <div>
      <div className="bg-brand-blue text-white pt-[47px] pb-[8px]">
        <div className="max-w-[1200px] mx-auto mb-[38px] flex items-center justify-around">
          <img src={FooterLogo} alt="" />
          <div className="w-[80%] flex justify-around">
            <div className="flex flex-col gap-1">
              <h5 className="uppercase mb-3 text-[14px] font-medium">
                Need Help
              </h5>
              <Link to={'/contact-us'} className="text-[12px] hover:underline">
                Contact Us
              </Link>
              <Link to={'/faqs'} className="text-[12px] hover:underline">
                FAQs
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="uppercase mb-3 text-[14px] font-medium">
                Useful Links
              </h5>
              <Link
                to={'/refund-and-returns'}
                className="text-[12px] hover:underline">
                Refund and Returns
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="uppercase mb-3 text-[14px] font-medium">
                About Vicsmall
              </h5>
              <Link to={'/contact-us'} className="text-[12px] hover:underline">
                About Us
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="uppercase mb-3 text-[14px] font-medium">
                Payment Methods
              </h5>
              <div className="flex gap-2">
                <Mastercard width="24px" height="auto" />
                <Visa width="24px" height="auto" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="uppercase mb-3 text-[14px] font-medium">
                Follow Us
              </h5>
              <div className="flex gap-2">
                <Facebook width="24px" height="auto" />
                <Instagram width="24px" height="auto" />
              </div>
            </div>
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
