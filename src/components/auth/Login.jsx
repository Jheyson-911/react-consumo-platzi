import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { setToken } from '../../helpers/localStorage';

export const Login = () => {
  const [data, setData] = useState({
    email: 'john@mail.com',
    password: 'changeme',
  });

  const navigate = useNavigate();
  const { profile } = useContext(AuthContext);

  const sesion = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        data
      );
      setToken(response.data.access_token);
      profile();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    sesion();
  };

  return (
    <div className='h-screen '>
      <div className='flex justify-center items-center h-full'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 p-10 rounded-lg border-[1px] border-black-mine'
        >
          <h2 className='self-center text-2xl font-bold'>Login</h2>
          <div className=''>
            <input
              type='text'
              name='email'
              placeholder='Email'
              className='focus:ring-0 focus:outline-none h-10 px-3 border-[1px]'
              onChange={e => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='focus:ring-0 focus:outline-none h-10 px-3 border-[1px]'
              onChange={e => setData({ ...data, password: e.target.value })}
            />
          </div>
          <button
            type='submit'
            className='bg-black-mine text-white font-bold h-8  w-36 self-center rounded-lg hover:border-white hover:bg-purple-mine'
          >
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  );
};
