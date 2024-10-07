import Header from '@/components/common/mobile/Header';
import CategoriesBar from '@/components/common/mobile/CategoriesBar';
import Footer from '@/components/common/mobile/Footer';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/common/mobile/Accordion';

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
        <h1 className="my-[25px] text-[24px] text-center font-semibold">
          FAQs
        </h1>
        <div className="max-w-[935px] mx-auto px-[7px] py-[8px] bg-[#F0F2F5] flex flex-col gap-y-[8px] border-[9px] border-white rounded-[14px]">
          {faqs.map((faq) => (
            <Accordion type="single" collapsible className="px-[8px] bg-white">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="px-[24px] text-[14px] text-left items-start hover:no-underline">
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
