import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartUnit } from './CartUnit';

export const Cart = () => {
  const [open, setOpen] = useState(false);
  let precio = 0;

  const Modal = () => {
    setOpen(!open);
  };

  const deleteCart = () => {
    setCart([]);
  };

  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <div className='container mx-auto grid grid-cols-2 auto-rows-cart gap-4 mt-10'>
        {cart.map(el => {
          precio += el.price;
          return (
            <CartUnit
              key={el.id}
              cart={el}
            />
          );
        })}
      </div>
      <div className='flex justify-evenly mt-10'>
        <button
          className='bg-red-500 px-4 rounded-lg text-2xl text-white font-bold py-2'
          onClick={deleteCart}
        >
          Vaciar Carrito
        </button>
        <button
          className='bg-green-mine px-4 rounded-lg text-2xl text-white font-bold py-2'
          onClick={Modal}
        >
          {`Total a pagar S/.${precio}`}
        </button>
      </div>
    </div>
  );
};
