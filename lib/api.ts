const API_URL = "https://6747d70138c8741641d7d832.mockapi.io";

export async function fetchRooms() {
  const response = await fetch(`${API_URL}/rooms`);
  if (!response.ok) {
    throw new Error("Failed to fetch rooms");
  }
  return response.json();
}

export async function fetchSuites() {
  const response = await fetch(`${API_URL}/suites`);
  if (!response.ok) {
    throw new Error("Failed to fetch suites");
  }
  return response.json();
}
