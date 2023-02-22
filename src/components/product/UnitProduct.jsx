import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

export const UnitProduct = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const addCart = () => {
    setCart([...cart, product]);
  };
  return (
    <div className=' p-1 flex flex-col  justify-between hover:shadow-mine-shadow'>
      <div>
        <img
          src={product.images[0]}
          alt=''
        />
      </div>
      <div className='px-6 flex flex-col items-center justify-between'>
        <p className='text-lg text-center'>Luxurious Concrete Bike</p>
        <p className='text-gray-400 text-center description-style'>
          {product.description}
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-xl font-bold text-center'>{`S/. ${product.price}.00`}</span>
        <button
          className='hover:bg-green-mine hover:text-black bg-black-mine text-white font-semibold flex justify-center gap-4 py-1'
          onClick={addCart}
        >
          <p>Agregar al carrito</p>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
