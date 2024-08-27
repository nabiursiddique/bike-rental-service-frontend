import { Link, NavLink } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import bikeLogo from '../../../assets/icons/Bike logo.png';
import { logout, useCurrentUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export const MainNav = () => {
  const user = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <div className='mr-4 hidden gap-2 md:flex justify-between items-center w-full my-1'>
      <div>
        <Link to={'/'} className='text-orange-400'>
          <img src={bikeLogo} alt='Bike Rental Logo' />
          <h1 className='text-center text-xl font-bold'>Bike Rental</h1>
        </Link>
      </div>
      <nav id='navbar' className='flex gap-2'>
        <NavLink to={'/'}>
          {({ isActive }) => (
            <Button
              variant='link'
              className={`text-xl ${
                isActive ? 'text-orange-600' : 'hover:text-orange-500'
              }`}
            >
              Home
            </Button>
          )}
        </NavLink>

        <NavLink to={'/about-us'}>
          {({ isActive }) => (
            <Button
              variant='link'
              className={`text-xl ${
                isActive ? 'text-orange-600' : 'hover:text-orange-500'
              }`}
            >
              About Us
            </Button>
          )}
        </NavLink>

        <NavLink to={'/dashboard/profile'}>
          {({ isActive }) => (
            <Button
              variant='link'
              className={`text-xl ${
                isActive ? 'text-orange-600' : 'hover:text-orange-500'
              }`}
            >
              Dashboard
            </Button>
          )}
        </NavLink>

        <NavLink to={'/all-bikes'}>
          {({ isActive }) => (
            <Button
              variant='link'
              className={`text-xl ${
                isActive ? 'text-orange-600' : 'hover:text-orange-500'
              }`}
            >
              All Bikes
            </Button>
          )}
        </NavLink>

        {!user && (
          <NavLink to={'/signIn'}>
            {({ isActive }) => (
              <Button
                variant='link'
                className={`text-xl ${
                  isActive ? 'text-orange-600' : 'hover:text-orange-500'
                }`}
              >
                Sign In
              </Button>
            )}
          </NavLink>
        )}

        {user && (
          <Button
            variant='secondary'
            className='text-xl text-red-600'
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        )}
      </nav>
    </div>
  );
};
