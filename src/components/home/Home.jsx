import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Seccion de Home</h2>
      <h2>{user.email}</h2>
    </div>
  );
};
