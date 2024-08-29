import Loading from '@/components/CommonComponents/Loading';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetAllRentalsQuery } from '@/redux/features/rentals/rentals.api';
import { TRental } from '@/types/rentalType';
import { CheckCheck, CornerUpLeft } from 'lucide-react';

const ReturnBike = () => {
  const { data, isLoading } = useGetAllRentalsQuery(undefined);

  const allRentals = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='p-6 font-[oswald] '>
      <div className='flex items-center mb-4 gap-2 text-orange-600 text-2xl'>
        <CornerUpLeft />
        <h2 className='font-bold'>Return Bikes</h2>
      </div>

      <Table className='mt-6 border border-orange-600'>
        <TableHeader>
          <TableRow className='border border-orange-600'>
            <TableHead className='text-orange-600'>Bike Id</TableHead>
            <TableHead className='text-orange-600'>Start Time</TableHead>
            <TableHead className='text-orange-600'>Return Time</TableHead>
            <TableHead className='text-orange-600'>Returned</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allRentals.map((rental: TRental) => (
            <TableRow key={'id'}>
              <TableCell>{rental.bikeId}</TableCell>
              <TableCell>{rental.startTime}</TableCell>
              <TableCell>
                {rental.returnTime ? rental.returnTime : 'Not Returned'}
              </TableCell>
              <TableCell>
                {rental.isReturned ? (
                  <CheckCheck className='text-green-600' />
                ) : (
                  <Button variant={'orangeBtn'}>Calculate</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReturnBike;
