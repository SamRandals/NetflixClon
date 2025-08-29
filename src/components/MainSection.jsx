import { useRef } from 'react'
import '../styles/MainSection.css'

function MainSection() {
  const handleAnimationP = useRef(null);
  const handleValueInput = useRef(null);
  const handleFocus = () => {
   
    if(handleAnimationP.current){

      handleAnimationP.current.classList.add("moveUp")

    }

  };

 const handleBlur = () => {
    if (handleValueInput.current.value === "") {
      // si está vacío, baja
      handleAnimationP.current.classList.remove("moveUp");
      handleAnimationP.current.classList.add("toMoveDown");
      

      // limpiar la clase al terminar animación
      handleAnimationP.current.addEventListener(
        "animationend",
        () => {
          handleAnimationP.current.classList.remove("toMoveDown");
        },
        { once: true }
      );
    } else {
      // si tiene texto, queda arriba de forma estática
      handleAnimationP.current.classList.add("moveUp");
    }
  };

  return (
    <main className="Main-section">
      <section className="first-section">
        <h1>Peliculas y series ilimitadas y mucho más</h1>
        <h3>A partir de $18.900. Cancela cuando quieras</h3>
        <p>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </p>

        <div className="email-input__container">
          <input
            ref={handleValueInput}
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="email"
            className="email-input"
          />
          <p ref={handleAnimationP} className="animation__email">
            Email
          </p>
          <button className="send__email-button">Comenzar</button>
        </div>
      </section>
    </main>
  );
}

export default MainSection;
