"use client";

import React, { useRef, useState } from "react";
import "./Testimonios.css";

const testimonials = [
  {
    id: "1",
    text: "This hotel is perfect for corporate groups and has comfortable business rooms for meetings. Wifi was faulty but that's something that is common in La Paz. They mentioned an upgrade so that would make things better.",
    author: "MUV Scooter Rental",
    role: "Great Location and Rooms!",
    logo: "/icons/user_profile.svg",
  },
  {
    id: "2",
    text: "Amazing experience! The staff was incredibly friendly and the rooms were very comfortable. We enjoyed the family package and the activities organized by the hotel.",
    author: "Ana Lopez",
    role: "Family Trip",
    logo: "/icons/user.svg",
  },
  {
    id: "3",
    text: "I stayed here during a business trip. The executive package offered everything I needed, from a quiet workspace to great dining options. Highly recommend it!",
    author: "John Doe",
    role: "Business Traveler",
    logo: "/icons/person.svg",
  },
];

const Testimonios = () => {
  const currentIndex = useRef(0); // Mantiene el índice actual.

  const [testimonial, setTestimonial] = useState(testimonials[currentIndex.current]); // Estado inicial del testimonio.

  const handlePrevClick = () => {
    currentIndex.current =
      currentIndex.current === 0 ? testimonials.length - 1 : currentIndex.current - 1;
    setTestimonial(testimonials[currentIndex.current]); // Actualiza el estado.
  };

  const handleNextClick = () => {
    currentIndex.current =
      currentIndex.current === testimonials.length - 1 ? 0 : currentIndex.current + 1;
    setTestimonial(testimonials[currentIndex.current]); // Actualiza el estado.
  };

  return (
    <section className="testimonials-container">
      <h2 className="testimonials-title">Testimonios</h2>
      <p className="testimonials-subtitle">¿Qué dicen nuestros clientes?</p>
      <div className="testimonial-wrapper">
        <button className="nav-button left-button" onClick={handlePrevClick}>
          ❮
        </button>
        <div className="testimonial-card">
          <div className="testimonial-item">
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-footer">
              <img
                src={testimonial.logo}
                alt={testimonial.author}
                className="testimonial-logo"
              />
              <div>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="nav-button right-button" onClick={handleNextClick}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default Testimonios;
