export async function getServerSideProps() {
    //principal
    const resServicios = await fetch('https://673e55760118dbfe860b0087.mockapi.io/api/v1/servicios');
    //habitaciones
    const resHabitaciones = await fetch('');
    //eventos y salones
    const resEventos = await fetch('https://673e808e0118dbfe860b76dd.mockapi.io/eventos');
    const resSalones = await fetch('https://673e808e0118dbfe860b76dd.mockapi.io/armados');

    const [servicios, habitaciones, eventos, salones] = await Promise.all([
        resServicios.json(),
        resHabitaciones.json(),
        resEventos.json(),
        resSalones.json(),
    ]);

    return {
        props: {
            servicios,
            habitaciones,
            eventos,
            salones,
        },
    };
    
}