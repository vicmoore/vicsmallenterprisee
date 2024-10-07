import { useContext, useEffect, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import UserContext from '@/context/UserContext';

import PageLoading from '@/pages/buyer/desktop/PageLoading';

const PrivateRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const { userDetails } = useContext(UserContext) || {};

  useEffect(() => {
    if (userDetails !== undefined) {
      setIsLoading(false);
    }
  }, [userDetails]);

  if (isLoading) {
    return <PageLoading />; // Optionally show a loading spinner
  }

  return userDetails ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} replace={true} state={{ from: location }} />
  );
};

export default PrivateRoutes;
