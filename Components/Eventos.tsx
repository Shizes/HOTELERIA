"use client";
import { get } from "http";
import CardEvento from "./CardEvento";
import { getEventos } from "../lib/geEventos";
import { useEffect, useState } from "react";


interface CardEventsType {
  id: string;
  name: string;
  avatar: string;
  description: string;
}

const ApiEvents = () => {
    const[cardEvents, setCardEvents] = useState<CardEventsType[]>([]);
    useEffect(() => {
        async function fetchCardEvents() {
            try{
                const response = await getEventos(
                    "https://673e808e0118dbfe860b76dd.mockapi.io/eventos"
                );
                setCardEvents(response);
            }catch(error){
                console.error("Error al obtener eventos", error);
            }
        }
        fetchCardEvents();
    }, []);

    const titleStyle = {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#A91F8C",
      textAlign: "center" as const,
      marginBottom: "20px",
      fontFamily: "Dancing Script",
    };
  
  return (
    <div className="eventos"><h2 style={titleStyle}>Eventos</h2>
    {cardEvents.map(( card)  => (<CardEvento key={card.id} cardEvent={card} />
        
    ))}
    </div>
  );
}

export default ApiEvents