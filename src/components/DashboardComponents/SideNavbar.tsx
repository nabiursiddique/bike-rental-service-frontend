import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Bike,
  ChevronRight,
  PlusCircle,
  UserPen,
  UsersRound,
} from 'lucide-react';
import { Nav } from '../ui/nav';
import { LucideIcon } from 'lucide-react';

type NavLink = {
  title: string;
  to: string;
  icon: LucideIcon;
  variant?: 'default' | 'ghost';
  adminOnly?: boolean;
  userOnly?: boolean;
};

const SideNavbar = ({ role }: { role: 'admin' | 'user' }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navLinks: NavLink[] = [
    {
      title: 'Profile',
      to: 'profile',
      icon: UserPen,
      variant: 'default',
      adminOnly: false,
      userOnly: true,
    },
    {
      title: 'Add Bike',
      to: 'add-bike',
      icon: PlusCircle,
      variant: 'default',
      adminOnly: true,
      userOnly: false,
    },
    {
      title: 'Manage Bikes',
      to: 'manage-bikes',
      icon: Bike,
      variant: 'default',
      adminOnly: true,
      userOnly: false,
    },
    {
      title: 'Manage Users',
      to: 'manage-users',
      icon: UsersRound,
      variant: 'default',
      adminOnly: true,
      userOnly: false,
    },
    {
      title: 'My Rentals',
      to: 'my-rentals',
      icon: PlusCircle,
      variant: 'default',
      adminOnly: false,
      userOnly: true,
    },
  ];

  // Filter links based on role
  const filteredLinks = navLinks.filter((link) => {
    if (role === 'admin') return true; // Show all links for admin
    if (role === 'user') return !link.adminOnly; // Show user-only links and non-admin links for users
    return false;
  });

  return (
    <div className='relative min-w-[80px] lg:min-h-[100vh] border-r px-3 lg:pt-10 font-[oswald]'>
      <div className='my-10'>
        <Button
          variant='secondary'
          onClick={() => setIsCollapsed(!isCollapsed)}
          className='lg:absolute lg:right-[-20%] right-20 lg:top-5 hidden lg:block'
        >
          <ChevronRight className='h-6 w-6' />
        </Button>
      </div>
      <Nav isCollapsed={isCollapsed} links={filteredLinks} />
    </div>
  );
};

export default SideNavbar;
