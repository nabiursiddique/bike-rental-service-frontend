import DashboardLayout from '@/components/layout/DashboardLayout';
import MainLayout from '@/components/layout/MainLayout';
import AboutUs from '@/pages/AboutUs/AboutUs';
import AllBikes from '@/pages/AllBikes/AllBikes';
import AddBike from '@/pages/Admin/AddBike/AddBike';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Home from '@/pages/Home/Home';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard/Dashboard';
import BikeDetails from '@/pages/BikeDetails/BikeDetails';

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
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: 'add-bike',
        element: <AddBike />,
      },
    ],
  },
]);

export default router;
