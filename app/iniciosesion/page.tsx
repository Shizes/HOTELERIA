import React from 'react';
import Portada from '@/components/portada';
import LoginForm from '@/components/LoginForm';
import QuickAccess from '@/components/QuickAccess';
import RegisterLink from '@/components/RegisterLink';

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
