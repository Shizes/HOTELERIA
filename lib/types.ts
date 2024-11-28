export type Offer = {
    id: string;
    createdAt: string;
    name: string;
    avatar: string;
    price: string;
    car: string;
    quantity: number; // Cantidad disponible
    discount?: string; // Precio con descuento (opcional)
    type: "room" | "suit"; // Identificador del tipo de oferta
  };
