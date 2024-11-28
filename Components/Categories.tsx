import React from "react";
import Link from "next/link"; // Importa Link para navegación
import styles from "./Categories.module.css";

const Categories = () => {
  // Datos estáticos de las categorías con sus rutas
  const categories = [
    { id: 1, title: "Habitaciones", image: "../img/rooms_principal.jpg", link: "/habitaciones" },
    { id: 2, title: "Eventos", image: "../img/events_principal.jpg", link: "/eventos" },
    { id: 3, title: "Salones", image: "../img/Conferences & Meetings_principal.jpg", link: "/salones" },
    { id: 4, title: "Restaurante", image: "../img/restaurants_principal.jpg", link: "/restaurante" },
    { id: 5, title: "Ejecutivo", image: "../img/Service & Facilities_principal.jpg", link: "/ejecutivo" },
    { id: 6, title: "Ofertas", image: "../img/oferts_principal.jpg", link: "/ofertas" },
  ];

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.gridContainer}>
        {categories.map((category) => (
          <Link href={category.link} key={category.id} passHref>
            <div
              className={styles.categoryCard}
              style={{
                backgroundImage: `url(${category.image})`,
              }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;