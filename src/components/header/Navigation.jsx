import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import { clearToken } from '../../helpers/localStorage';

export const Navigation = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const fecha = new Date(user.creationAt);
  const [openProfile, setOpenProfile] = useState(false);
  const setProfile = () => {
    setOpenProfile(!openProfile);
  };

  return (
    <nav className=' flex gap-x-12 text-xl font-semibold'>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive ? 'nav-active' : 'nav-desactive'
        }
      >
        Productos
      </NavLink>
      <NavLink
        to={'/cart'}
        className='relative'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-7 h-7'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
          />
        </svg>
        <span className='absolute right-[-10px] top-[-15px] rounded-full text-base border-2 border-purple-mine bg-red-500 w-[25px] h-[25px] flex justify-center items-center'>
          {cart.length}
        </span>
      </NavLink>
      <div
        className='nav-desactive cursor-pointer relative'
        onClick={setProfile}
      >
        Perfil
        {openProfile && (
          <div className='absolute top-10 left-0 border-[1px] py-1 bg-purple-mine w-20 text-xs divide-y'>
            <div className='flex flex-col px-2 justify-center'>
              <img
                src={user.avatar}
                alt='avatar del usuario'
                width='50px'
                className='rounded-full self-center'
              />
            </div>
            <div className='flex flex-col px-2'>
              <span>username</span>
              <span>{user.name}</span>
            </div>
            <div className='flex flex-col px-2'>
              <span>role</span>
              <span>{user.role}</span>
            </div>
            <div className='flex flex-col px-2'>
              <span>user from</span>
              <span>{fecha.toLocaleDateString()}</span>
            </div>
            <NavLink
              className='flex flex-col px-2'
              onClick={() => clearToken()}
              to={'/login'}
            >
              <span>Log Out</span>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};
