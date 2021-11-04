import React, { useState } from "react";
import Opcion from "./components/Opcion";
import Resultado from "./components/Resultado";
import "./App.css";
function App() {
  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionMaquina, setEleccionMaquina] = useState({});

  const opciones = [
    {
      eleccion: "piedra",
      derrota: "tijera",
    },
    {
      eleccion: "papel",
      derrota: "piedra",
    },
    {
      eleccion: "tijera",
      derrota: "papel",
    },
  ];
  const elegirOpcion = (event) => {
    const jugador = opciones.find(
      (e) => e.eleccion === event.target.textContent
    );
    setEleccionJugador(jugador);
    eleccionRival();
  };
  const eleccionRival = () => {
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];

    setEleccionMaquina(eleccion);
  };
  return (
    <div className="App">
      <Resultado jugador={eleccionJugador} maquina={eleccionMaquina} />
      <main>
        <section>
          <div className="jugador">Jugador</div>
          <div className="eleccion">{eleccionJugador.eleccion}</div>
        </section>
        <section>
          <div className="Maquina">Maquina</div>
          <div className="eleccionMaquina">{eleccionMaquina.eleccion}</div>
        </section>
      </main>
      <div className="opciones">
        {opciones.map((e, index) => (
          <Opcion eleccion={elegirOpcion} valor={opciones[index]}></Opcion>
        ))}
      </div>
    </div>
  );
}

export default App;
