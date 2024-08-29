import Loading from '@/components/CommonComponents/Loading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useMyRentalsQuery } from '@/redux/features/rentals/rentals.api';
import { TRental } from '@/types/rentalType';

const MyRentals = () => {
  const { data, isLoading } = useMyRentalsQuery(undefined);

  const myRentals = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='p-6 space-y-6'>
      {myRentals && myRentals.length > 0 ? (
        myRentals.map((rental: TRental) => (
          <Card
            key={rental._id}
            className='border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden'
          >
            <CardContent className='flex items-center justify-between p-6'>
              <div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                  Bike ID:{' '}
                  <span className='text-orange-600'>{rental.bikeId}</span>
                </h3>
                <p className='text-sm text-gray-600'>
                  Start:{' '}
                  <span className='font-medium'>
                    {new Date(rental.startTime).toLocaleString()}
                  </span>
                </p>
                <p className='text-sm text-gray-600'>
                  Return:{' '}
                  <span className='font-medium'>
                    {rental.returnTime
                      ? new Date(rental.returnTime).toLocaleString()
                      : 'Not Returned Yet'}
                  </span>
                </p>
                <p className='mt-4 text-lg font-bold text-gray-800'>
                  Total:
                  {rental.totalCost
                    ? ` $${rental.totalCost.toFixed(2)}`
                    : ' Pending Calculation'}
                </p>
              </div>
              {!rental.isReturned && (
                <Button
                  variant='orangeBtn'
                  size='lg'
                  className='hover:bg-orange-700 transition-colors duration-300'
                >
                  Pay Now
                </Button>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <p className='text-center text-gray-500'>No rentals found.</p>
      )}
    </div>
  );
};

export default MyRentals;
