"use client";

import { Loader } from "@googlemaps/js-api-loader";
import React from "react";

const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "quarterly",
      });

      const { Map } = await loader.importLibrary("maps");

      const locationInMap = {
        lat: 9.528508625363342,
        lng: 76.82256215012495,
      };

      // MARKER
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const options: google.maps.MapOptions = {
        center: locationInMap,
        zoom: 15,
        mapId: "NEXT_MAPS_TUTS",
        mapTypeControl: false, // Disable map and satellite option
      };

      const map = new Map(mapRef.current as HTMLDivElement, options);

      // add the marker in the map
      const marker = new Marker({
        map: map,
        position: locationInMap,
      });
    };

    initializeMap();
  }, []);

  return <div className="h-[350px] w-full z-30 rounded-2xl " ref={mapRef} />;
};

export default Map;
