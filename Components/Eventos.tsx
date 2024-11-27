'use server';
import { getEventos } from "../lib/geEventos";
import CardEvento from "./CardEvento";

interface CardEventsType {
  id: string;
  name: string;
  avatar: string;
  description: string;
}

export default async function ApiEvents() {
  // Obtener datos del servidor
  const cardEvents: CardEventsType[] = await getEventos(
    "https://673e808e0118dbfe860b76dd.mockapi.io/eventos"
  );

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#A91F8C",
    textAlign: "center" as const,
    marginBottom: "20px",
    fontFamily: "Dancing Script",
  };

  return (
    <div>
      <h2 style={titleStyle}>Tipo de Eventos</h2>
      {cardEvents.map((card) => (
        <CardEvento key={card.id} cardEvent={card} />
      ))}
    </div>
  );
}
