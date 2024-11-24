export async function getData() {
    try {
    //principal
    const resServicios = await fetch('https://673e55760118dbfe860b0087.mockapi.io/api/v1/servicios');
    //habitaciones
    //const resHabitaciones = await fetch('');
    //eventos y salones
    const resEventos = await fetch('https://673e808e0118dbfe860b76dd.mockapi.io/eventos');
    const resSalones = await fetch('https://673e808e0118dbfe860b76dd.mockapi.io/armados');

    if (!resServicios.ok ||/* !resHabitacione.ok ||*/ !resEventos.ok || !resSalones.ok) {
        throw new Error('Error al obtener uno o más recursos');
      }

    const [servicios, /*habitaciones,*/ eventos, salones] = await Promise.all([
        resServicios.json(),
        //resHabitaciones.json(),
        resEventos.json(),
        resSalones.json(),
    ]);

    return {
        servicios,
        //habitaciones,
        eventos,
        salones,
      };
    } catch (error) {
      console.error('Error en getData:', error);
      throw new Error('No se pudieron cargar los datos');
    }
  }