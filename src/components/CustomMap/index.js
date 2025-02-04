import React from "react";
import { Map, Marker} from "@vis.gl/react-google-maps";
import { ReactComponent as SvgHeart } from "../MainImage/heart.svg";
import "./Map.css";

function CustomMap() {
  const markers = [
    {
      name: "Donde nos conocimos",
      lat: 12.43654922409404,
      lng: -86.89114074336868
    },
    {
      name: "Primera cita",
      lat: 12.422038909922772,
      lng: -86.87374127148452
    },
    {
      name: "Primer beso",
      lat: 12.436297557431448,
      lng: -86.87649443119177
    }
  ];
  const [markerLocation, setMarkerLocation] = React.useState({
    lat: 12.442606317338536,
    lng: -86.87833437450624
  });

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <div className={`flx map-markers ${openModal && "blur"}`}>
      <button
          className="button-marker"
          onClick={() => setMarkerLocation(markers[0])}
        >Donde nos conocimos</button>
        <button
          className="button-marker"
          onClick={() => setMarkerLocation(markers[1])}
        >Primera cita</button>
        <button
          className="button-marker"
          onClick={() => setMarkerLocation(markers[2])}
        >Primer beso</button>
        <button
          className="button-marker"
          onClick={() => setOpenModal(true)}
        >Mi lugar favorito</button>
      </div>

      <div className={`flx flx-col flx-center map-container ${openModal && "blur"}`}>
        <Map
          defaultZoom={13}
          defaultCenter={markerLocation}
          gestureHandling={"greedy"}
          disableDefaultUI
        >
          <Marker position={markerLocation} />
        </Map>
      </div>

      {openModal && (
        <div
          className="flx flx-center favorite-place-container"
          onClick={() => setOpenModal(false)}
        >
          <div className="flx flx-col flx-center favorite-place">
            <h1 className="favorite-place-h">Mi lugar favorito es a tu lado</h1>
            <SvgHeart className="favorite-heart"/>
          </div>
        </div>
      )}
    </>
  );
}

export { CustomMap };