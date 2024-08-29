import { useCurrentUser } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type AdminRouteProps ={
    children: ReactNode;
  }

const AdminRoute = ({ children }:AdminRouteProps) => {
  const user = useAppSelector(useCurrentUser);

  if (user?.role !== 'admin') {
    return <Navigate to='/signIn' />;
  }
  return children;
};

export default AdminRoute;
