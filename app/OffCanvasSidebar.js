"use client";

import { useState } from "react";
import { useProjects } from "../components/useProjects";
import ProjectDropdown from "../components/ProjectDropdown";
import ProjectList from "../components/ProjectList";
import DarkModeToggle from "../components/DarkModeToggle";
import { Offcanvas, Button } from "react-bootstrap";
import { useMap } from "react-leaflet";

export default function OffCanvasSidebar({ setMapProjects, markerRefs }) {
  const [show, setShow] = useState(false);
  const { projects, filteredProjects, filterProjects } = useProjects();
  const map = useMap();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const flyToLocation = (latitude, longitude, index) => {
    if (!map) return;
  
    map.flyTo([parseFloat(latitude), parseFloat(longitude)], 13, {
      animate: true,
      duration: 2,
    });
  
    // Trigger the popup for the marker
    const marker = markerRefs.current[index];
    if (marker) {
      marker.openPopup();
    }
  };
  
  const handleSelectCategory = (category) => {
    if (category === "All") {
      setMapProjects(projects); // Show all markers on the map
      filterProjects(""); // Show all projects in the sidebar
    } else {
      const filtered = projects.filter(
        (project) => project["Project Category"] === category
      );
      setMapProjects(filtered); // Update map markers
      filterProjects(category); // Update the sidebar
    }
  };
  

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 999,
        }}
      >
        <Button variant="primary" onClick={handleShow}>
          Open Sidebar
        </Button>
        <DarkModeToggle />
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ProjectDropdown onSelectCategory={handleSelectCategory} />
          <div className="mt-4">
            <h5>Projects:</h5>
            <ProjectList
              projects={filteredProjects}
              onFlyTo={(latitude, longitude, index) =>
                flyToLocation(latitude, longitude, index)
              }
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
