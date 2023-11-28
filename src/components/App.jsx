import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoutes } from './RestrictedRoutes';
import { PrivateRoute } from './PrivateRoute';
import { Wrapper } from './Wrapper/Wrapper';

const Home = lazy(() => import('../pages/Home'))
const Signin = lazy(() => import('../pages/Signin'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Home/>}/>
        <Route
          path="/register"
          element={
            <RestrictedRoutes redirectTo="/contacts" component={<Signin />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoutes redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
