export async function getApis() {
    try {
        const resSalones = await fetch('https://673e808e0118dbfe860b76dd.mockapi.io/armados');
        const resEventos = await fetch('https://673e808e0118dbfe860b76dd.mockapi.io/eventos');

        // Verifica si alguna de las respuestas no es correcta
        if (!resSalones.ok) {
            throw new Error('Error al recuperar los datos de salones');
        }
        if (!resEventos.ok) {
            throw new Error('Error al recuperar los datos de eventos');
        }

        // Convierte las respuestas a JSON
        const dataSalones = await resSalones.json();
        const dataEventos = await resEventos.json();

        // Devuelve ambos conjuntos de datos
        return {
            salones: dataSalones,
            eventos: dataEventos,
        };
    } catch (error) {
        console.error(error);
        throw new Error('Error en la recuperación de datos: ');
    }
}