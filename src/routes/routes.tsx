import DashboardLayout from '@/components/layout/DashboardLayout';
import MainLayout from '@/components/layout/MainLayout';
import AboutUs from '@/pages/AboutUs/AboutUs';
import AllBikes from '@/pages/AllBikes/AllBikes';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Home from '@/pages/Home/Home';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import BikeDetails from '@/pages/BikeDetails/BikeDetails';
import Profile from '@/pages/Dashboard/User/Profile/Profile';
import AddBike from '@/pages/Dashboard/Admin/AddBike/AddBike';
import Rentals from '@/pages/Dashboard/User/Rentals/Rentals';
import ManageBikes from '@/pages/Dashboard/Admin/AllBikes/ManageBikes';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/all-bikes',
        element: <AllBikes />,
      },
      {
        path: '/bike-details/:id',
        element: <BikeDetails />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/signIn',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'my-rentals',
        element: <Rentals />,
      },
      // admin routes
      {
        path: 'add-bike',
        element: <AddBike />,
      },
      {
        path: 'manage-bikes',
        element: <ManageBikes />,
      },
    ],
  },
]);

export default router;
