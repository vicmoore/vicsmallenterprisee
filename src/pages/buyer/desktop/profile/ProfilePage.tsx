import CategoriesBar from '@/components/common/desktop/CategoriesBar';
import Header from '@/components/common/desktop/Header';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/common/desktop/BreadCrumbs';
import { Tabs, TabsList, TabsTrigger } from '@/components/common/desktop/Tabs';

import Footer from '@/components/common/desktop/Footer';
import { Link, Outlet } from 'react-router-dom';

const ProfilePage = () => {
  const tabs = [
    {
      name: 'profile',
      value: 'profile',
      link: '/profile',
    },
    {
      name: 'orders',
      value: 'orders',
      link: 'orders',
    },
    // {
    //   name: 'part payments',
    //   value: 'part-payments',
    //   link: 'part-payments',
    // },
    // {
    //   name: 'addresses',
    //   value: 'addresses',
    //   link: 'addresses',
    // },
  ];

  return (
    <div>
      <Header />
      <CategoriesBar />
      <section className="bg-[#F9F9F9] pb-[154px]">
        <div className="max-w-[1200px] mx-auto py-[22px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Profile</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="max-w-[1200px] mx-auto mt-[33px]">
          <Tabs defaultValue="profile" className="flex gap-x-[23px]">
            <TabsList className="h-fit bg-white px-[36px] py-[15px] flex-col items-start justify-start gap-y-[19px] rounded-[14px]">
              {tabs.map((tab) => (
                <Link to={tab.link || '#'} key={tab.value}>
                  <TabsTrigger
                    value={tab.value}
                    className="w-full justify-start text-[14px] text-[#67676D] border border-[#00000017] rounded-[11px] capitalize data-[state=active]:border-[#FFF6F0] data-[state=active]:bg-[#FFF6F0] data-[state=active]:text-brand-orange data-[state=active]:shadow-none">
                    {tab.name}
                  </TabsTrigger>
                </Link>
              ))}
            </TabsList>
            <div>
              <Outlet />
            </div>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProfilePage;
