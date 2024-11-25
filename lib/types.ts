export type Offer = {
    id: string;
    createdAt: string;
    name: string;
    avatar: string;
    price: string;
    car: string;
    type: "room" | "suit"; // Identificador del tipo de oferta
  };