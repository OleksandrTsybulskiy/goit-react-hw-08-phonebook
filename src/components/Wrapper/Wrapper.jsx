import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { WrapperContainer } from './Wrapper.styled';


export const Wrapper = () => {
  return (
    <>
      <AppBar />
      <WrapperContainer>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
      </WrapperContainer>
    </>
  );
};