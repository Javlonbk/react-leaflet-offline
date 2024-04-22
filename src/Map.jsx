import React from "react";
import { MapContainer, TileLayer, CircleMarker, Circle } from "react-leaflet";

function MapComponent() {
  const zoom = 12;

  // offline status
  const gps = {
    lat: 41.346917247524715,
    lng: 69.233781223953,
  };

  const radius = 7000;

  return (
    <div style={{ height: "100vh" }}> 
      <MapContainer style={{ height: "100%" }} center={gps} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* <TileLayer url="/Tashkent_full/{z}/{x}/{y}.png" />   In there, We must to work local map tiles files. Map tiles files is working great but the path doesn't support this */}

        {/* Show user location */}
        <CircleMarker
          center={gps}
          radius={5}
          color="white"
          fillColor="blue"
          fillOpacity={0.7}
        />
        {/* Show circle based on radius data */}
        {radius && (
          <Circle
            center={gps}
            radius={radius}
            color="red"
            fillColor="#0172FC"
            dashArray={"5, 10"}
            fillOpacity={0.4}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
