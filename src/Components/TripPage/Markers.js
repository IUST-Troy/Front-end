import React from "react";
import { Marker, useMap, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Markers({ places }) {
    const map = useMap();
    React.useEffect(() => {
        if (places.length > 0) {
            const bounds = L.latLngBounds(
                places.map((place) => [place.lan, place.lon])
            );
            map.fitBounds(bounds);
        }
    }, [places]);
    return (
        <>
            {places.map((place, index) => {
                return (
                    <Marker position={[place.lan, place.lon]}>
                        <Popup>{place.Name ? place.Name : ""}</Popup>
                    </Marker>
                );
            })}
        </>
    );
}
