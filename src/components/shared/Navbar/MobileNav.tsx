import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import bikeLogo from '../../../assets/icons/Bike logo.png';

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <div className='md:hidden'>
        <Link to={'/'} className='text-orange-400'>
          <img src={bikeLogo} alt='' />
          <h1 className='text-center text-xl font-bold'>Bike Rental</h1>
        </Link>
      </div>
      <SheetContent side='left'>
        <nav className='flex flex-col items-start'>
          <SheetTrigger asChild>
            <NavLink to={'/'}>
              <Button variant='link' className='hover:text-orange-500'>
                Home
              </Button>
            </NavLink>
          </SheetTrigger>
          <SheetTrigger asChild>
            <NavLink to={'/about-us'}>
              <Button variant='link' className='hover:text-orange-500'>
                About Us
              </Button>
            </NavLink>
          </SheetTrigger>
          <SheetTrigger asChild>
            <NavLink to={'/dashboard/add-bike'}>
              <Button variant='link' className='hover:text-orange-500'>
                Dashboard
              </Button>
            </NavLink>
          </SheetTrigger>
          <SheetTrigger asChild>
            <NavLink to={'/all-bikes'}>
              <Button variant='link' className='hover:text-orange-500'>
                All Bikes
              </Button>
            </NavLink>
          </SheetTrigger>
          <SheetTrigger asChild>
            <NavLink to={'/signUp'}>
              <Button variant='link' className='hover:text-orange-500'>
                Sign Up
              </Button>
            </NavLink>
          </SheetTrigger>
          <SheetTrigger asChild>
            <NavLink to={'/signIn'}>
              <Button variant='link' className='hover:text-orange-500'>
                Sign In
              </Button>
            </NavLink>
          </SheetTrigger>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
