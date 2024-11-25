import { Offer } from "./types";

const API_URLS = {
  ROOMS: "https://67439f41b7464b1c2a656481.mockapi.io/offers_R",
  SUITS: "https://67439f41b7464b1c2a656481.mockapi.io/offers_S",
};

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error al realizar la solicitud a ${url}:`, error);
    throw error;
  }
}

export async function getRoomsOffers() {
  return await fetchData<Offer[]>(API_URLS.ROOMS);
}

export async function getSuitsOffers() {
  return await fetchData<Offer[]>(API_URLS.SUITS);
}

export { API_URLS };
