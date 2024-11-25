export async function getServerSideProps() {
    const resServicios = await fetch('https://api.hotel.com/servicios');
    const resHabitaciones = await fetch('https://api.hotel.com/habitaciones-disponibles');
  
    const entServicios = await resServicios.json();
    const entHabitaciones = await resHabitaciones.json();
  
    return {
      props: {
        entServicios,
        entHabitaciones,
      }
    };
}
  
function Servicios({ entServicios }) {
    return (
      <div>
        <h1>Servicios del Hotel</h1>
        <ul>
          {servicios.map((servicio) => (
            <li key={servicio.id}>{servicio.nombre}</li>
          ))}
        </ul>
  
        <h1>Habitaciones Disponibles</h1>
        <ul>
          {habitaciones.map((habitacion) => (
            <li key={habitacion.id}>
              {habitacion.tipo} - ${habitacion.precio}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PaginaHotel;
  
  