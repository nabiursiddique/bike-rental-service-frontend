import Loading from '@/components/CommonComponents/Loading';
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
import { useGetUserProfileQuery } from '@/redux/features/users/users.api';
import { Avatar } from '@radix-ui/react-avatar';
import { FilePenIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { data, isLoading, refetch } = useGetUserProfileQuery(undefined);

  const userProfile = data?.data;

  useEffect(() => {
    if (data) {
      refetch();
    }
  }, [data, refetch]);

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Card className='w-full  mx-auto font-[oswald] my-5'>
      <CardHeader className='py-8 px-6 rounded-t-lg'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-16 w-16'>
              <AvatarFallback className='text-orange-600 font-bold font-[oswald] uppercase'>
                {userProfile.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className='text-2xl font-bold text-orange-600'>
                {userProfile.name}
              </h3>
              <p className='text-sm '>{userProfile.email}</p>
            </div>
          </div>
          <Button
            variant='ghost'
            className='text-1xl'
            onClick={() => setIsEditing(true)}
          >
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
          <Input id='_id' value={userProfile._id} readOnly type='text' />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='name' className='text-orange-600 text-1xl'>
            Name
          </Label>
          <Input
            id='name'
            defaultValue={userProfile.name}
            readOnly={!isEditing}
          />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='email' className='text-orange-600 text-1xl'>
            Email
          </Label>
          <Input id='email' type='email' value={userProfile.email} readOnly />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='phone' className='text-orange-600 text-1xl'>
            Phone
          </Label>
          <Input
            id='phone'
            type='tel'
            defaultValue={userProfile.phone}
            readOnly={!isEditing}
          />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='address' className='text-orange-600 text-1xl'>
            Address
          </Label>
          <Input
            id='address'
            defaultValue={userProfile.address}
            readOnly={!isEditing}
          />
        </div>
        <div className='grid gap-2 '>
          <Label htmlFor='address' className='text-orange-600 text-1xl'>
            User Role
          </Label>
          <Input id='address' value={userProfile.role} readOnly />
        </div>
      </CardContent>

      {isEditing && (
        <CardFooter className='flex justify-end gap-2 p-6'>
          <Button variant='outline' onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant='orangeBtn'>Save Changes</Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default Profile;
