import React from 'react';
import Portada from '@/Components/portada';
import LoginForm from '@/Components/LoginForm';
import QuickAccess from '@/Components/QuickAccess';
import RegisterLink from '@/Components/RegisterLink';

const InicioSesion = () => {
  return (
    <div>
      <Portada />
      <main>
        <LoginForm />
        <QuickAccess />
        <RegisterLink />
      </main>
    </div>
  );
};

export default InicioSesion;
