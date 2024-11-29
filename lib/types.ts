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

  export type RoomApiData = {
    id: string; // Identificador único
    createdAt: string; // Fecha de creación
    name: string; // Nombre de la habitación
    avatar: string; // URL de la imagen de la habitación
    price: string; // Precio base de la habitación
    capacity: string; // Capacidad (número de personas)
    services: string[]; // Lista de servicios disponibles
    discount?: string; // Precio con descuento (opcional)
    quantity: string; // Cantidad disponible (viene como string en la API)
    state: string; // Estado de disponibilidad ("Enabled" o "Disabled")
    car: string; // URL del icono del carrito
    bedtype: string; // Descripción del tipo de cama
    size: string; // Tamaño o capacidad adicional de la habitación
  };