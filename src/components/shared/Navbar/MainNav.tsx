import { Link, NavLink } from 'react-router-dom';
import { Button } from '../../../components/ui/button';

export default function MainNav() {
  return (
    <div className='mr-4 hidden gap-2 md:flex justify-between items-center w-full'>
      <div>
        <Link to={'/'} className='text-3xl font-extrabold text-lime-400'>
          Bike Rental
        </Link>
      </div>
      <nav id='navbar' className='flex gap-2'>
        <NavLink to={'/'}>
          <Button variant='link' className='hover:text-lime-500'>
            Home
          </Button>
        </NavLink>
        <NavLink to={'/about-us'}>
          <Button variant='link' className='hover:text-lime-500'>
            About Us
          </Button>
        </NavLink>
        <NavLink to={'/dashboard/add-bike'}>
          <Button variant='link' className='hover:text-lime-500'>
            Dashboard
          </Button>
        </NavLink>
        <NavLink to={'/all-bikes'}>
          <Button variant='link' className='hover:text-lime-500'>
            All Bikes
          </Button>
        </NavLink>
        <NavLink to={'/signUp'}>
          <Button variant='link' className='hover:text-lime-500'>
            Sign Up
          </Button>
        </NavLink>
        <NavLink to={'/signIn'}>
          <Button variant='link' className='hover:text-lime-500'>
            Sign In
          </Button>
        </NavLink>
      </nav>
    </div>
  );
}
