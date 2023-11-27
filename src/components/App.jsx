import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';
import { Wrapper } from './Wrapper/Wrapper';


const Signin = lazy(() => import('../pages/SignIn'));
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
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Signin />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
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
