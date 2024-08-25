import DashboardLayout from '@/components/layout/DashboardLayout';
import MainLayout from '@/components/layout/MainLayout';
import AboutUs from '@/pages/AboutUs/AboutUs';
import AllBikes from '@/pages/AllBikes/AllBikes';
import AddBike from '@/pages/Dashboard/AddBike/AddBike';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Home from '@/pages/Home/Home';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import { createBrowserRouter } from 'react-router-dom';

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
    path: '/dashboard/add-bike',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard/add-bike',
        element: <AddBike />,
      },
    ],
  },
]);

export default router;
