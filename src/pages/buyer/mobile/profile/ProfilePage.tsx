import CategoriesBar from '@/components/common/mobile/CategoriesBar';
import Header from '@/components/common/mobile/Header';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/mobile/Tabs';
import ProfileTabContent from '../../../../components/profile/mobile/ProfileTabContent';
import OrdersTabContent from '../../../../components/profile/mobile/OrdersTabContent';
import PartPaymentsTabContent from '../../../../components/profile/mobile/PartPaymentsTabContent';
import AddressesTabContent from '../../../../components/profile/mobile/AddressesTabContent';
import PaymentMethodsTabContent from '../../../../components/profile/mobile/PaymentMethodsTabContent';

import Footer from '@/components/common/mobile/Footer';

const ProfilePage = () => {
  const tabs = [
    {
      name: 'profile',
      value: 'profile',
    },
    {
      name: 'orders',
      value: 'orders',
    },
    {
      name: 'part payments',
      value: 'part-payments',
    },
    {
      name: 'addresses',
      value: 'addresses',
    },
    {
      name: 'payment methods',
      value: 'payment-methods',
    },
  ];

  const tabsContent = [
    {
      name: 'profile',
      value: 'profile',
      component: <ProfileTabContent />,
    },
    {
      name: 'orders',
      value: 'orders',
      component: <OrdersTabContent />,
    },
    {
      name: 'part payments',
      value: 'part-payments',
      component: <PartPaymentsTabContent />,
    },
    {
      name: 'addresses',
      value: 'addresses',
      component: <AddressesTabContent />,
    },
    {
      name: 'payment methods',
      value: 'payment-methods',
      component: <PaymentMethodsTabContent />,
    },
  ];
  return (
    <div>
      <Header />
      <CategoriesBar />
      <section className="bg-[#F9F9F9] pb-[80px]">
        <div className="max-w-[1200px] mx-auto mt-[33px]">
          <Tabs defaultValue="profile" className="flex gap-x-[23px]">
            <TabsList className="h-fit bg-white px-[36px] py-[15px] flex-col items-start justify-start gap-y-[19px] rounded-[14px]">
              {tabs.map((tab) => (
                <TabsTrigger
                  value={tab.value}
                  className="w-full justify-start text-[14px] text-[#67676D] border border-[#00000017] rounded-[11px] capitalize data-[state=active]:border-[#FFF6F0] data-[state=active]:bg-[#FFF6F0] data-[state=active]:text-brand-orange data-[state=active]:shadow-none">
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabsContent.map((tabContent) => (
              <TabsContent
                value={tabContent.value}
                className="mt-0 px-[36px] py-[23px] bg-white flex-grow rounded-[14px]">
                {tabContent.component}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProfilePage;
