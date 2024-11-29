export async function getSalones(url: string) {
    const response = await fetch(url, { cache: 'no-store' }); // cache: 'no-store' asegura datos frescos
    if (!response.ok) {
      throw new Error(`Error al obtener los datos: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}