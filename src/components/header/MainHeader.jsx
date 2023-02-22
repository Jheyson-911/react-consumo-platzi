import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const MainHeader = () => {
  return (
    <header className='bg-white shadow-lg h-20 sticky top-0'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};
