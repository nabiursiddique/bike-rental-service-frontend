import { MainNav } from './MainNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <header className='w-full border-b font-[oswald]'>
      <div className='flex h-14 items-center px-4'>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
