export async function getApis() {
    const res = await fetch('https://api.hotel.com/api/v1/hotel/services');

    if (!res.ok) {
        throw new Error('Failed to fetch API');
    }
    const data = await res.json();
    return data;
}