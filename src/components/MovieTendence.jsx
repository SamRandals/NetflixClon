import { useRef } from "react";
import "../styles/Tendences.css";

function Tendences() {
  const scrollRef = useRef(null);

  // mover scroll con botones
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (<>
  <h2 style={{
    paddingTop:"30px",
     marginLeft:"120px",
     marginBottom:"20px"
  }}>Tendencias</h2>
    <div className="tendence__wrapper">
      
      {/* Botón izquierda */}
      <button className="arrow left" onClick={scrollLeft}>
        &#8249;
      </button>

      {/* Contenedor scrolleable */}
      <div className="tendence__contain" ref={scrollRef}>
        <div className="portadas__peliculas">
          <img src="https://m.media-amazon.com/images/M/MV5BNDM2ZTA0NjQtMjk4Ni00ODkyLTk3ZjMtYzFjZThjYzQzNWViXkEyXkFqcGc@._V1_.jpg" alt="pelicula 1" />
          <h1 className="list">1</h1>
        </div>
        <div className="portadas__peliculas">
          <img src="https://m.media-amazon.com/images/M/MV5BYTQyNTRmYjItMDBjYi00YWNhLWEwMmQtNzJhODNiNjEzOWJlXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="pelicula 2" />
          <h1 className="list">2</h1>
        </div>
        <div className="portadas__peliculas">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBKAffwEN9snwsaigidzeY62j-NjcUOmAlQ&s" alt="pelicula 2" />
          <h1 className="list">3</h1>
        </div>
        <div className="portadas__peliculas">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYbGYOl7CKtPGWlarE21z8hfoIy5u7mOFUw&s" alt="pelicula 2" />
          <h1 className="list">4</h1>
        </div>
        <div className="portadas__peliculas">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQlyRhDsd3vDOkM1e68MkwDGHQHRNEmxwsw&s" alt="pelicula 2" />
          <h1 className="list">5</h1>
        </div>
        <div className="portadas__peliculas">
          <img src="https://images.justwatch.com/poster/300921845/s718/the-woman-king.jpg" alt="pelicula 2" />
          <h1 className="list">6</h1>
        </div>
        <div className="portadas__peliculas">
          <img src="https://hips.hearstapps.com/hmg-prod/images/juego-calamar-3-netflix-683d844a86523.jpg?resize=980:*" alt="pelicula 2" />
          <h1 className="list">7</h1>
        </div>
        <div className="portadas__peliculas">
          <img src="https://m.media-amazon.com/images/M/MV5BNTRjNTc5ZjMtOTczNS00MGJkLTgwY2MtMGJhODhhYmExZGI1XkEyXkFqcGc@._V1_.jpg" alt="pelicula 2" />
          <h1 className="list">8</h1>
        </div>
        <div className="portadas__peliculas">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNu9wVJRvZWGjJHrbq74lSpk6jXsysUQTAzg&s" alt="pelicula 2" />
          <h1 className="list">9</h1>
        </div>
        <div className="portadas__peliculas">
          <img src="https://hips.hearstapps.com/hmg-prod/images/gladiator-2-poster-2-66f18818a0141.jpg" alt="pelicula 2" />
          <h1 className="list">10</h1>
        </div>
        
      </div>

      {/* Botón derecha */}
      <button className="arrow right" onClick={scrollRight}>
        &#8250;
      </button>
    </div>
    <div className="presentation">
      <h2 className="moreMotivesTitle">Mas motivos para unirte</h2>
      <div className="card__presentation-container">
        <div className="card__presentation">
          <h2>Hellou</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor possimus in suscipit, minus ipsam, iste harum eius expedita distinctio numquam dolores! Veritatis consequuntur iste recusandae quis, accusantium officia impedit!</p>
        </div>

          <div className="card__presentation">
          <h2>Hellou</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor possimus in suscipit, minus ipsam, iste harum eius expedita distinctio numquam dolores! Veritatis consequuntur iste recusandae quis, accusantium officia impedit!</p>
        </div>

          <div className="card__presentation">
          <h2>Hellou</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor possimus in suscipit, minus ipsam, iste harum eius expedita distinctio numquam dolores! Veritatis consequuntur iste recusandae quis, accusantium officia impedit!</p>
        </div>

          <div className="card__presentation">
          <h2>Hellou</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor possimus in suscipit, minus ipsam, iste harum eius expedita distinctio numquam dolores! Veritatis consequuntur iste recusandae quis, accusantium officia impedit!</p>
        </div>
      </div>
    </div>
</>  );
}

export default Tendences;
