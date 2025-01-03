// components/ProjectModal.js
import { Modal, Typography, Box, Button } from "@mui/material";

export default function ProjectModal({ project, open, onClose }) {
  if (!project) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Typography variant="h6">{project["Project Name"]}</Typography>
        <Typography>
          {project["DescriptionLong"] || "No detailed description available."}
        </Typography>
        <img
          src={project.ImageUrl || "https://via.placeholder.com/400"}
          alt={project["Project Name"]}
          style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={onClose}
          style={{ marginTop: "10px" }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}
