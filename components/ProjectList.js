export default function ProjectList({ projects, onFlyTo }) {
  const placeholderImage = "https://via.placeholder.com/50"; // Placeholder image URL

  // Filter out invalid projects
  const validProjects = projects.filter(
    (project) =>
      project["Project Name"] && // Ensure project name exists
      !isNaN(parseFloat(project.Latitude)) && // Ensure Latitude is a valid number
      !isNaN(parseFloat(project.Longitude)) // Ensure Longitude is a valid number
  );

  if (validProjects.length === 0) {
    return <p>No projects found for the selected category.</p>;
  }

  return (
    <ul>
      {validProjects.map((project, index) => (
        <li
          key={`${project["Project Name"]}-${index}`} // Ensure a unique key
          onClick={() =>
            onFlyTo(
              parseFloat(project.Latitude),
              parseFloat(project.Longitude),
              index // Pass index to `onFlyTo`
            )
          }
          style={{
            cursor: "pointer",
            marginBottom: "10px",
            padding: "5px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={project.ImageUrl || placeholderImage} // Use placeholder if ImageUrl is missing
            alt={project["Project Name"]}
            style={{ width: "50px", height: "50px", borderRadius: "5px" }}
          />
          <div>
            <strong>{project["Project Name"]}</strong>
            <p>{project["DescriptionShort"]}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
