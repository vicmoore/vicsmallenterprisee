import Header from '@/components/common/desktop/Header';
import CategoriesBar from '@/components/common/desktop/CategoriesBar';
import Footer from '@/components/common/desktop/Footer';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/common/desktop/BreadCrumbs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/common/desktop/Accordion';

const Faqs = () => {
  const faqs = [
    {
      question: 'Ornare laoreet mi tempus neque',
      answer:
        'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
    },
    {
      question: 'Rhoncus nullam aliquam nam proin',
      answer:
        'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
    },
  ];
  return (
    <>
      <Header />
      <CategoriesBar />
      <section className="bg-[#F9F9F9] pb-[154px]">
        <div className="max-w-[1200px] mx-auto py-[21px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Faqs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="mb-[43px] text-[41px] text-center font-semibold">
          FAQs
        </h1>
        <div className="max-w-[935px] mx-auto px-[7px] py-[8px] bg-[#F0F2F5] flex flex-col gap-y-[8px] border-[9px] border-white rounded-[14px]">
          {faqs.map((faq) => (
            <Accordion type="single" collapsible className="px-[8px] bg-white">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="px-[24px] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-[48px] py-[16px] text-[#3C3C43D9] font-inter border-t border-t-[#F0F2F5]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Faqs;
