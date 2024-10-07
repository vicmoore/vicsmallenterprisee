import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

// import CrslImg from '@/assets/images/crsl.png';
import CrslImgDesktop from '@/assets/images/crsl-d.png';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/common/mobile/Carousel';
const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );
  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="">
                <img src={CrslImgDesktop} alt="" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Hero;
