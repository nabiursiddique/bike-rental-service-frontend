import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import bikeLogo from '../../../assets/icons/Bike logo.png';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: 'Emily R.',
    feedback:
      'The bikes were in great condition, and the rental process was quick and easy. Exploring the city on a bike was the highlight of my trip!',
    avatar:
      'https://www.shutterstock.com/image-photo/man-suit-looks-camera-smiles-260nw-606177233.jpg',
    role: 'Tourist',
  },
  {
    name: 'Mark T.',
    feedback:
      "I've rented bikes from several places, but this was by far the best experience. Affordable prices and excellent customer service.",
    avatar:
      'https://www.shutterstock.com/image-photo/man-suit-looks-camera-smiles-260nw-606177233.jpg',
    role: 'Local Resident',
  },
  {
    name: 'Sarah K.',
    feedback:
      'The e-bikes were a game-changer for our day out. We covered so much ground effortlessly. Highly recommend!',
    avatar:
      'https://www.shutterstock.com/image-photo/man-suit-looks-camera-smiles-260nw-606177233.jpg',
    role: 'Weekend Explorer',
  },
  {
    name: 'MD Zisan',
    feedback:
      'The e-bikes were a game-changer for our day out. We covered so much ground effortlessly. Highly recommend!',
    avatar:
      'https://www.shutterstock.com/image-photo/man-suit-looks-camera-smiles-260nw-606177233.jpg',
    role: 'Weekend Explorer',
  },
];

const Testimonials = () => {
  return (
    <div className='mt-20 font-[oswald] mx-2'>
      <div>
        <div className='flex justify-center'>
          <img src={bikeLogo} alt='' />
        </div>
        <h1 className='lg:text-5xl text-3xl font-semibold uppercase lg:mt-5 text-center'>
          <span className='text-orange-600'>❝</span> Testimonials{' '}
          <span className='text-orange-600'>❞</span>
        </h1>
      </div>

      <div className='lg:max-w-[90%] mx-auto py-10'>
        <Carousel
          className='mx-2'
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem className='md:basis-1/2 lg:basis-1/3' key={index}>
                <div
                  key={index}
                  className='flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-orange-600'
                >
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className='w-24 h-24 rounded-full mb-4'
                  />
                  <p className='text-lg italic text-center text-gray-700 mb-4'>
                    <span className='text-orange-600'>" </span>
                    {testimonial.feedback}
                    <span className='text-orange-600'> "</span>
                  </p>
                  <p className='font-semibold text-gray-900'>
                    {testimonial.name}
                  </p>
                  <p className='text-sm text-gray-500'>{testimonial.role}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='ml-10 lg:ml-3 bg-orange-600 text-white' />
          <CarouselNext className='mr-10 lg:mr-3 bg-orange-600 text-white' />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
