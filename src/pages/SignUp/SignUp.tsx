import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/components/ui/select';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type TUserInput = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role?: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TUserInput>({
    defaultValues: {
      role: 'user', // Set default role to 'user'
    },
  });

  const handleSignUp: SubmitHandler<TUserInput> = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='my-16'>
      <div className='font-[Oswald] flex lg:items-center justify-center'>
        <Card>
          <CardContent className='lg:w-[500px] w-[55vh] py-5'>
            <div className='mb-3'>
              <h2 className='text-3xl font-semibold text-orange-600'>
                Sign Up
              </h2>
              <p className='text-second'>
                Fill out the form below to create an account.
              </p>
            </div>

            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className='space-y-2'>
                <div className='grid grid-cols-1 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                      id='name'
                      placeholder='Enter your name'
                      type='text'
                      {...register('name', {
                        required: 'Name is required.',
                      })}
                    />
                    {errors.name && (
                      <p className='text-sm mt-2 text-red-500'>
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    placeholder='Enter your email'
                    type='email'
                    {...register('email', {
                      required: 'Email is required.',
                    })}
                  />
                  {errors.email && (
                    <p className='text-sm mt-2 text-red-500'>
                      {errors.email?.message}
                    </p>
                  )}
                </div>

                <div className='space-y-2 relative'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    placeholder='Password'
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required.',
                    })}
                  />

                  <button
                    type='button'
                    onClick={togglePasswordVisibility}
                    className='absolute right-2 top-9 text-gray-500 hover:text-gray-800'
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>

                  {errors.password && (
                    <p className='text-sm mt-2 text-red-500'>
                      {errors.password?.message}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='phone'>Phone</Label>
                  <Input
                    id='phone'
                    placeholder='Enter your phone number'
                    type='tel'
                    {...register('phone', {
                      required: 'Phone number is required.',
                    })}
                  />
                  {errors.phone && (
                    <p className='text-sm mt-2 text-red-500'>
                      {errors.phone?.message}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='address'>Address</Label>
                  <Input
                    id='address'
                    placeholder='Enter your address'
                    {...register('address', {
                      required: 'Address is required.',
                    })}
                  />
                  {errors.address && (
                    <p className='text-sm mt-2 text-red-500'>
                      {errors.address?.message}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <Label>Role (optional)</Label>
                  <Select
                    onValueChange={(value) => setValue('role', value)}
                    defaultValue='user' // Default role as 'user'
                  >
                    <SelectTrigger aria-label='Role'>
                      <SelectValue placeholder='Select your Role' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>All Roles</SelectLabel>
                        <SelectItem value='user'>User</SelectItem>
                        <SelectItem value='admin'>Admin</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className='mt-3'>
                <Button
                  type='submit'
                  className='bg-orange-600 hover:bg-orange-700 w-full text-white'
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
