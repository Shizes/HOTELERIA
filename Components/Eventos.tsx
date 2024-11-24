import React from 'react';
import { getData } from '@/lib/Api';
import CardEvent from '@/components/CardEvent';

export default async function EventosPage() {
  // Obtiene los datos usando getData
  const { eventos } = await getData();

  return (
    <div>
      <h1>Eventos del Hotel</h1>
      <CardEvent eventos={eventos} />
    </div>
  );
}
