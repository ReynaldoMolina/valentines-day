import React from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
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

  return (
    <>
      <h1 className="title">Resuelve el puzzle</h1>
      <p className="instructions">Tip: si no puedes mover la pieza, quiere decir que está en su lugar</p>
      <p className="instructions">(Vuelve a entrar para descubrir más, son 7 imágenes)</p>
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
              <h1 className="title">Lo has resuelto</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { Puzzle };