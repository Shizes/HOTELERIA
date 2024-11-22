export async function getRooms(url: string) {
    const response = await fetch(url.toString());
    if (!response.ok) {
      console.error("Failed to fetch rooms, status:", response.status);
      throw new Error("Failed to fetch rooms");
    }
    const data = await response.json();
    return data;
  }