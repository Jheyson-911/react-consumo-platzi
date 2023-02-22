import axios from 'axios';
import { useEffect, useState } from 'react';
import { UnitProduct } from './UnitProduct';

export const Products = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products
        `
      );
      setData(response.data);
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className='container mx-auto '>
      <div className='my-4 text-3xl text-center font-bold '>
        Aqui tienes todos nuestros productos🔥
      </div>
      {loading ? (
        <div className='flex items-center justify-center space-x-2 animate-pulse'>
          <div className='w-8 h-8 bg-blue-400 rounded-full'></div>
          <div className='w-8 h-8 bg-blue-400 rounded-full'></div>
          <div className='w-8 h-8 bg-blue-400 rounded-full'></div>
        </div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className='grid grid-cols-mine-grid gap-x-4 gap-y-14 auto-rows-mine place-content-center'>
          {data.map(el => {
            return (
              <UnitProduct
                key={el.id}
                product={el}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
