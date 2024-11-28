import React from 'react';
import './Terms.css'; // Importa los estilos

const Terms = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1 className="terms-title">Términos y Condiciones</h1>
        <p className="terms-paragraph">
          Bienvenido a nuestro sitio web. Al utilizar este servicio, aceptas
          cumplir con los siguientes términos y condiciones. Por favor, léelos
          cuidadosamente antes de continuar.
        </p>
        <h2 className="terms-subtitle">1. Uso del Sitio</h2>
        <p className="terms-paragraph">
          Este sitio está destinado únicamente para fines informativos y
          personales. No se permite el uso con fines comerciales sin
          autorización previa.
        </p>
        <h2 className="terms-subtitle">2. Propiedad Intelectual</h2>
        <p className="terms-paragraph">
          Todo el contenido de este sitio, incluyendo textos, imágenes y
          gráficos, está protegido por derechos de autor. Está prohibida su
          reproducción sin consentimiento.
        </p>
        <h2 className="terms-subtitle">3. Cambios en los Términos</h2>
        <p className="terms-paragraph">
          Nos reservamos el derecho de modificar estos términos en cualquier
          momento. Te recomendamos revisar esta sección periódicamente.
        </p>
        <h2 className="terms-subtitle">4. Contacto</h2>
        <p className="terms-paragraph">
          Si tienes alguna pregunta sobre estos términos, puedes contactarnos a
          través de nuestro formulario de contacto.
        </p>
      </div>
    </div>
  );
};

export default Terms;
