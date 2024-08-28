import { AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@radix-ui/react-avatar';
import { FilePenIcon } from 'lucide-react';
import { useState } from 'react';

const Profile = () => {
  // const dispatch = useAppDispatch();
  // const { data, isLoading, refetch, error } = useGetProfileQuery(undefined);
  // const [update, { isLoading: updateloading }] = useUpdateProfileMutation();

  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card className='w-full  mx-auto font-[oswald] my-5'>
      <CardHeader className='py-8 px-6 rounded-t-lg'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-16 w-16'>
              <AvatarFallback className='text-orange-600 font-bold font-[oswald]'>
                NA
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className='text-2xl font-bold text-orange-600'>
                Nabiur Siddique
              </h3>
              <p className='text-sm '>nabiursiddique01@gmail.com</p>
            </div>
          </div>
          <Button variant='ghost' onClick={() => setIsEditing(true)}>
            <FilePenIcon className='h-5 w-5 text-orange-600' />
            <span className='text-orange-600'>Edit Profile</span>
          </Button>
        </div>
      </CardHeader>

      <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
        <div className='grid gap-2'>
          <Label htmlFor='_id' className='text-orange-600 text-1xl'>
            ID
          </Label>
          <Input id='_id' value={'id'} readOnly type='text' />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='name' className='text-orange-600 text-1xl'>
            Name
          </Label>
          <Input
            id='name'
            defaultValue={'Nabiur Siddique'}
            readOnly={!isEditing}
          />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='email' className='text-orange-600 text-1xl'>
            Email
          </Label>
          <Input id='email' type='email' value={'nabiur@gmail.com'} readOnly />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='phone' className='text-orange-600 text-1xl'>
            Phone
          </Label>
          <Input
            id='phone'
            type='tel'
            defaultValue={'013030303'}
            readOnly={!isEditing}
          />
        </div>
        <div className='grid gap-2 col-span-full '>
          <Label htmlFor='address' className='text-orange-600 text-1xl'>
            Address
          </Label>
          <Textarea
            id='address'
            rows={3}
            defaultValue={'Naogaon'}
            readOnly={!isEditing}
          />
        </div>
      </CardContent>

      {isEditing && (
        <CardFooter className='flex justify-end gap-2 p-6'>
          <Button variant='outline'>Cancel</Button>
          <Button variant='orangeBtn'>Save Changes</Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default Profile;
