import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import sliderImage1 from '@/assets/images/Banner Images/carousel-image-1.jpg';
import sliderImage2 from '@/assets/images/Banner Images/carousel-image-2.jpg';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className='relative w-full lg:h-[100vh] h-[60vh]'>
              <div
                className='absolute inset-0 bg-cover bg-center'
                style={{ backgroundImage: `url(${sliderImage1})` }}
              ></div>
              <div className='absolute inset-0 bg-black opacity-50'></div>
              <div className='relative z-10 lg:w-[60%] md:w-[80%] lg:top-40 top-20 lg:left-14 left-10 flex flex-col lg:items-start md:items-center lg:ml-7 rounded-lg'>
                <h1 className='lg:text-4xl font-sans font-extrabold text-white'>
                  Rent Your Favorite <br />
                </h1>
                <h1 className='lg:text-7xl text-4xl font-sans font-extrabold text-white my-2'>
                  <span className='text-lime-400'> Motor Bikes </span> With{' '}
                  <span className='text-lime-400'>30% </span>Discount
                  <br />
                </h1>
                <Button className='bg-lime-400'>Book Now</Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='relative w-full lg:h-[100vh] h-[60vh]'>
              <div
                className='absolute inset-0 bg-cover bg-center'
                style={{ backgroundImage: `url(${sliderImage2})` }}
              ></div>
              <div className='absolute inset-0 bg-black opacity-50'></div>
              <div className='relative z-10 lg:w-[60%] md:w-[80%] lg:top-40 top-20 lg:left-14 left-10 flex flex-col lg:items-start md:items-center lg:ml-7 rounded-lg'>
                <h1 className='lg:text-4xl font-sans font-extrabold text-white'>
                  Special Offers <br />
                </h1>
                <h1 className='lg:text-7xl text-4xl font-sans font-extrabold text-white my-2'>
                  <span className='text-lime-400'> 100 % Off </span> <br /> on
                  01 April
                  <br />
                </h1>
                <Button className='bg-lime-400'>Book Now</Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='lg:ml-[80px] ml-[50px]' />
        <CarouselNext className='lg:mr-[80px] mr-[50px]' />
      </Carousel>
    </div>
  );
};

export default HeroSection;
