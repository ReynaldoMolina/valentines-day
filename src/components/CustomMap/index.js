import React from "react";
import { Map, Marker} from "@vis.gl/react-google-maps";
import { ReactComponent as SvgHeart } from "../MainImage/heart.svg";
import "./Map.css";

function CustomMap() {
  const markers = [
    {
      id: 1,
      position: {
        lat: 12.43654922409404,
        lng: -86.89114074336868
      },
      label: "Donde nos conocimos"
    },
    {
      id: 2,
      position: {
        lat: 12.422038909922772,
        lng: -86.87374127148452
      },
      label: "Primera cita"
    },
    {
      id: 3,
      position: {
        lat: 12.436297557431448,
        lng: -86.87649443119177
      },
      label: "Primer beso"
    }
  ];
  const [openModal, setOpenModal] = React.useState(false);
  const [marker, setMarker] = React.useState({
    lat: 12.442606317338536,
    lng: -86.87833437450624
  });

  return (
    <>
      <h1 className="title">Lugares importantes de nuestra relación 💞</h1>
      <p className="instructions">Si no ves el 📍 amplía la vista para que se vea toda la ciudad</p>
      <div className={`flx map-markers ${openModal && "blur"}`}>
        {markers.map(e => (
          <button
            key={e.id}
            className="button-marker"
            onClick={() => setMarker(e.position)}>
            {e.label}
          </button>
        ))}
        <button
          className="button-marker"
          onClick={() => setOpenModal(true)}>
          Mi lugar favorito
        </button>
      </div>

      <div className={`flx flx-col flx-center map-container ${openModal && "blur"}`}>
        <Map
          defaultZoom={13}
          defaultCenter={marker}
          gestureHandling={"greedy"}
          disableDefaultUI>
          <Marker position={marker}/>
        </Map>
      </div>

      {openModal && (
        <div
          className="flx flx-center modal-container"
          onClick={() => setOpenModal(false)}
        >
          <div className="flx flx-center favorite-place-out">
            <div className="flx flx-col flx-center favorite-place">
              <h1 className="favorite-place-h">Mi lugar favorito es a tu lado 🙈</h1>
              <SvgHeart className="favorite-heart"/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { CustomMap };