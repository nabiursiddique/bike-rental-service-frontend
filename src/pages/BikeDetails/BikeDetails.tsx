import Loading from '@/components/CommonComponents/Loading';
import { Button } from '@/components/ui/button';
import { useGetSingleBikeQuery } from '@/redux/features/bikes/bikes.api';
import { useParams } from 'react-router-dom';

const BikeDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBikeQuery(id);
  const bike = data?.data;
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='font-[oswald] px-4 py-12 md:py-8 lg:py-8 lg:px-20 lg:my-10 mt-0 '>
      <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
        <div className='lg:mt-0 md:mt-0 mt-10'>
          <img
            src={bike.image}
            alt='Bike'
            width={800}
            height={600}
            className='w-full h-auto rounded-lg object-cover'
            style={{ aspectRatio: '800/600', objectFit: 'cover' }}
          />
        </div>
        <div className='order-1 '>
          <div className='space-y-4'>
            <h1 className='text-3xl md:text-4xl font-bold text-orange-600'>
              {bike.name}
            </h1>
            <p className='text-muted-foreground text-lg'>{bike.description}</p>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <p className='text-muted-foreground'>Price per Hour</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(bike.pricePerHour)}
                </p>
              </div>
              <div>
                <p className='text-muted-foreground'>Availability</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {bike.isAvailable ? 'Available' : 'Not Available'}
                </p>
              </div>
              <div>
                <p className='text-muted-foreground'>Engine Capacity</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {bike.cc + ' cc'}{' '}
                </p>
              </div>
              <div>
                <p className='text-muted-foreground'>Year</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {bike.year}
                </p>
              </div>
              <div>
                <p className='text-muted-foreground'>Model</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {bike.model}
                </p>
              </div>
              <div>
                <p className='text-muted-foreground'>Brand</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {bike.brand}
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              {bike.isAvailable ? (
                <Button
                  size='lg'
                  className='bg-orange-500 hover:bg-orange-600 hover:scale-95 transition-all'
                >
                  Rent Now
                </Button>
              ) : (
                <Button size='lg' variant='outline'>
                  Notify me when available
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
