export async function getSuits(url: string) {
    const response = await fetch(url.toString());
    if (!response.ok) {
        throw new Error("Failed to fetch suits");
    }
    const data = await response.json();
    return data; 
}