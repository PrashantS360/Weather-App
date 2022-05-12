import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
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
        // mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
        mapboxgl.accessToken = "pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA";
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: [lon, lat],
                zoom: 11
            });
            if (map) {
                console.log("ALL OK!");
            }
        };

        if (!map) initializeMap({ setMap, mapContainer });

        // eslint-disable-next-line
    }, [lon, lat]);

    return <>
        <div className="">
            <div className="sidebar relative lg:absolute">
                Longitude: {lon} | Latitude: {lat}
            </div>
            <div ref={el => (mapContainer.current = el)} style={styles} />
        </div>
    </>;
};

export default MapboxGLMap;
