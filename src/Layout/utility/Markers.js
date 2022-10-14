import { Marker } from "@react-google-maps/api";
import React from "react";



const Markerscall = ({data}) => {
    const MARKERS = data && data;

    return MARKERS.map((coord) => (
        <Marker position={coord} key={coord.lat + "" + coord.lng} />
    ));
}

export default Markerscall;