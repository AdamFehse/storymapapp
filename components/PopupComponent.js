import React from "react";
import { Button } from "@mui/material";
import "@/styles/popup-styles.css";

export default function PopupComponent({ project, onMoreDetails }) {
  return (
    <div className="popup-content">
      <img
        src={project.ImageUrl || "https://via.placeholder.com/150"}
        alt={project["Project Name"]}
        className="popup-image"
      />
      <strong>{project["Project Name"]}</strong>
      <p>{project["DescriptionShort"]}</p>
      <Button
        variant="contained"
        size="small"
        onClick={() => onMoreDetails(project)}
        style={{ marginTop: "10px" }}
      >
        More Details
      </Button>
    </div>
  );
}
