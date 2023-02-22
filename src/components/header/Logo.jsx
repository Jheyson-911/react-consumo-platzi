import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export const Logo = () => {
  return (
    <div className='py-4'>
      <NavLink to={'/'}>
        <img
          src={logo}
          alt='Logo de la empresa'
          height={'100%'}
        />
      </NavLink>
    </div>
  );
};
