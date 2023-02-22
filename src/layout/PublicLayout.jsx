import { Outlet } from 'react-router-dom';
import { MainHeader } from '../components/header/MainHeader';

export const PublicLayout = () => {
  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  );
};
