import { Outlet } from 'react-router-dom';
import SideNavbar from '../DashboardComponents/SideNavbar';
import Navbar from '../shared/Navbar/Navbar';

const DashboardLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className='flex lg:flex-row flex-col '>
          <div className=''>
            <SideNavbar role={'admin'}></SideNavbar>
          </div>
          <div className='lg:w-[90%] ml-10'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
