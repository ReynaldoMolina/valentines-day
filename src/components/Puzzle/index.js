import React from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { ReactComponent as SvgReload } from "./reload.svg";
import img1 from "./puzzle1.jpg";
import img2 from "./puzzle2.jpg";
import img3 from "./puzzle3.jpg";
import img4 from "./puzzle4.jpg";
import img5 from "./puzzle5.jpg";
import img6 from "./puzzle6.jpg";
import img7 from "./puzzle7.jpg";
import "./Puzzle.css";

function randomIndex() {
  let min = 0;
  let max = 6;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

const randomOut = randomIndex();

function Puzzle() {
  const [openModal, setOpenModal] = React.useState(false);
  const [index, setIndex] = React.useState(randomOut);
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const messages = [
    "Siempre seguí adelante mi amor 🥹🫂",
    "Vas a ver que vas a salir victoriosa de todo 🥹🫂",
    "Vos con el amor de tu vida 🤭🙈",
    "Las flores favoritas del amor de mi vida 🤭💕",
    "Yo creo en vos 🥹🫂",
    "Seguí intentado, ya va a llegar 🥹🫂",
    "Las otras flores favoritas del amor de mi vida 🤭💕"
  ];

  return (
    <>
      <h1 className="title">Resuelve el rompecabezas</h1>
      <p className="instructions">Si no puedes mover la pieza, está en su lugar correcto.</p>
      <p className="instructions">Pulsa el botón de abajo para cargar otra imagen, son 7 en total.</p>
      <div className="flx reload-container">
        <SvgReload
          className="reload-icon"
          onClick={() => setIndex(randomIndex())}/>
      </div>
      <div className="puzzle-container">
        <JigsawPuzzle
          imageSrc={images[index]}
          rows={2}
          columns={3}
          onSolved={() => setOpenModal(true)}
        />
      </div>

      {openModal && (
        <div
          className="flx flx-center modal-container"
          onClick={() => setOpenModal(false)}
        >
          <div className="flx flx-center congrats-out">
            <div className="flx flx-col flx-center congrats">
              <p className="title congrats-text">{messages[index]}</p>
              <h1 className="title">❤️</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { Puzzle };