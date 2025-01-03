// components/Map.js
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useRef, useEffect } from "react";
import L from "leaflet";
import { Button } from "@mui/material";
import Sidebar from "../app/OffCanvasSidebar";
import ProjectModal from "../components/ProjectModal";
import "@/styles/map-darkmode.css";
import PopupComponent from "../components/PopupComponent";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Map() {
  const [mapProjects, setMapProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const markerRefs = useRef([]);

  useEffect(() => {
    fetch("https://adamfehse.github.io/storymapapp/storymapdata.json")
      .then((response) => response.json())
      .then((data) => {
        setMapProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const isValidCoordinate = (latitude, longitude) => {
    return !isNaN(latitude) && !isNaN(longitude);
  };

  const handleModalOpen = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleCategorySelect = (category) => {
    if (category === "All" || category === "") {
      setFilteredProjects(mapProjects);
    } else {
      setFilteredProjects(
        mapProjects.filter(
          (project) => project["Project Category"] === category
        )
      );
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSidebarToggle}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: 1000,
        }}
      >
        Open Sidebar
      </Button>

      <Sidebar
        open={sidebarOpen}
        onClose={handleSidebarToggle}
        onSelectCategory={handleCategorySelect}
        projects={mapProjects}
        filteredProjects={filteredProjects}
        onFlyTo={(lat, lon, index) => {
          const marker = markerRefs.current[index];
          marker?.openPopup();
        }}
        onMoreDetails={handleModalOpen}
      />

      <MapContainer
        center={[31.916004, -110.990274]}
        zoom={9}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {filteredProjects
          .filter((project) =>
            isValidCoordinate(
              parseFloat(project.Latitude),
              parseFloat(project.Longitude)
            )
          )
          .map((project, index) => (
            <Marker
              key={project["Project Name"] + index}
              position={[
                parseFloat(project.Latitude),
                parseFloat(project.Longitude),
              ]}
              ref={(ref) => (markerRefs.current[index] = ref)}
            >
              <Popup>
                <PopupComponent
                  project={project}
                  onMoreDetails={handleModalOpen}
                />
              </Popup>
            </Marker>
          ))}

      </MapContainer>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onClose={handleModalClose}
      />
    </>
  );
}
