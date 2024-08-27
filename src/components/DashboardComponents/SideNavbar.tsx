import { useState } from 'react';
import { Button } from '../ui/button';
import { ChevronRight, LucideIcon, PlusCircle } from 'lucide-react';
import { Nav } from '../ui/nav';

const SideNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navLinks: {
    title: string;
    to: string;
    icon: LucideIcon;
    variant: 'default' | 'ghost';
    adminOnly?: boolean;
    userOnly?: boolean;
  }[] = [
    {
      title: 'Profile',
      to: 'profile',
      icon: PlusCircle,
      variant: 'default',
    },
    {
      title: 'My Rentals',
      to: 'my-rentals',
      icon: PlusCircle,
      variant: 'default',
    },
    {
      title: 'Add Bike',
      to: 'add-bike',
      icon: PlusCircle,
      variant: 'default',
    },
    {
      title: 'Manage Bikes',
      to: 'manage-bikes',
      icon: PlusCircle,
      variant: 'default',
    },
  ];
  return (
    <div className='relative min-w-[80px] lg:min-h-[100vh] border-r px-3 lg:pt-10 text-black'>
      <div className='my-10'>
        <Button
          variant='secondary'
          onClick={() => setIsCollapsed(!isCollapsed)}
          className='lg:absolute lg:right-[-20%] right-20 lg:top-5 hidden lg:block'
        >
          <ChevronRight className='h-6 w-6' />
        </Button>
      </div>
      <Nav isCollapsed={isCollapsed} links={navLinks} />
    </div>
  );
};

export default SideNavbar;
