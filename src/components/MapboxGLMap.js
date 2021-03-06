import React, { useEffect, useRef, useState } from "react";
import ReactMapGL from "react-map-gl";
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
import "mapbox-gl/dist/mapbox-gl.css";


const MapboxGLMap = ({ lon, lat }) => {
    const styles = {
        width: "100%",
        height: "90vh"
    };
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    // console.log(lon,lat);
    useEffect(() => {
        // eslint-disable-next-line import/no-webpack-loader-syntax
        mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: [lon, lat],
                zoom: 11
            });
            if (map && ReactMapGL) {
                console.log("ALL OK!");
            }
        };

        if (!map) initializeMap({ setMap, mapContainer });

        // eslint-disable-next-line
    }, [lon, lat]);

    return <>
        <div className="">
            <div className="sidebar relative lg:absolute mt-11">
                Longitude: {lon} | Latitude: {lat}
            </div>
            <div ref={el => (mapContainer.current = el)} style={styles} />
        </div>
    </>;
};

export default MapboxGLMap;
