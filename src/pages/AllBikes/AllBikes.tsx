import Loading from '@/components/CommonComponents/Loading';
import { useGetAllBikesQuery } from '@/redux/features/bikes/bikes.api';
import bikeLogo from '../../assets/icons/Bike logo.png';
import BikeCard from '@/components/BikeCard/BikeCard';

const AllBikes = () => {
  const { data, isLoading } = useGetAllBikesQuery(undefined);
  const bikes = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='font-[oswald] py-5'>
      <div>
        <div className='flex justify-center'>
          <img src={bikeLogo} alt='' />
        </div>
        <h1 className='lg:text-5xl text-3xl font-semibold uppercase lg:mt-5 text-center'>
          Available Bikes
        </h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 mx-5'>
        {bikes?.map(
          (bike: {
            _id: string;
            name: string;
            isAvailable: boolean;
            description: string;
            brand: string;
            model: string;
            year: number;
            cc: number;
            pricePerHour: number;
          }) => (
            <BikeCard
              id={bike._id}
              bikeName={bike.name}
              imageUrl={
                'https://autobike.templaza.net/wp-content/uploads/2023/04/baptiste-david-XfbjTaxSnuw-unsplash.jpg'
              }
              availability={bike.isAvailable}
              description={bike.description}
              brand={bike.brand}
              model={bike.model}
              year={bike.year}
              maxSpeed={bike.cc}
              price={bike.pricePerHour}
            />
          )
        )}
      </div>
    </div>
  );
};

export default AllBikes;
