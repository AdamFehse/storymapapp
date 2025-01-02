"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useRef, useEffect } from "react";
import OffCanvasSidebar from "../app/OffCanvasSidebar";
import L from "leaflet";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Map() {
  const [mapProjects, setMapProjects] = useState([]); // Store projects to display
  const markerRefs = useRef([]); // Store marker references

  useEffect(() => {
    // Fetch projects on mount to initialize map markers
    fetch("https://adamfehse.github.io/storymapapp/storymapdata.json")
      .then((response) => response.json())
      .then((data) => setMapProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const isValidCoordinate = (latitude, longitude) => {
    return (
      !isNaN(latitude) &&
      !isNaN(longitude) &&
      latitude >= -90 &&
      latitude <= 90 &&
      longitude >= -180 &&
      longitude <= 180
    );
  };

  return (
    <MapContainer
      center={[31.916004, -110.990274]}
      zoom={9}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <OffCanvasSidebar
        setMapProjects={setMapProjects}
        markerRefs={markerRefs}
      />
      {mapProjects
        .filter((project) =>
          isValidCoordinate(
            parseFloat(project.Latitude),
            parseFloat(project.Longitude)
          )
        )
        .map((project, index) => (
          <Marker
            key={`${project["Project Name"]}-${index}`} // Match the same key logic as ProjectList
            position={[
              parseFloat(project.Latitude),
              parseFloat(project.Longitude),
            ]}
            ref={(ref) => (markerRefs.current[index] = ref)} // Store the reference
          >
            <Popup>
              <strong>{project["Project Name"]}</strong>
              <p>{project["DescriptionShort"]}</p>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
