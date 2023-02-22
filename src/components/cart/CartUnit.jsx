import React from 'react';

export const CartUnit = ({ cart }) => {
  return (
    <div className='flex justify-between border-[1px]'>
      <div className=''>
        <img
          src={cart.images[0]}
          alt=''
          className='max-h-full'
        />
      </div>
      <div className='w-3/4 flex justify-between items-center px-4'>
        <div className=''>
          <h2 className='text-lg font-medium'>{cart.title}</h2>
          <span className='bg-purple-mine px-2 text-white font-bold rounded-md'>
            {cart.category.name}
          </span>
        </div>
        <div className=''>
          <span className='font-extrabold text-2xl '>S/.{cart.price}</span>
        </div>
      </div>
    </div>
  );
};
