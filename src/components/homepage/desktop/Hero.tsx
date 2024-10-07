import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import CrslImg from '@/assets/images/crsl.png';
import CrslImgDesktop from '@/assets/images/crsl-d.png';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/common/desktop/Carousel';
const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );
  return (
    <>
      <div className="sm:hidden">
        <img src={CrslImg} alt="" className="w-full" />
      </div>
      <div className="hidden sm:block max-w-[1200px] mx-auto mb-[40px]">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img src={CrslImgDesktop} alt="" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
