// components/useProjects.js
import { useState, useEffect } from "react";

export function useProjects() {
  const [projects, setProjects] = useState([]); // All projects
  const [filteredProjects, setFilteredProjects] = useState([]); // Filtered projects

  useEffect(() => {
    fetch("https://adamfehse.github.io/storymapapp/storymapdata.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data); // Initialize with all projects
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filterProjects = (category) => {
    if (category === "") {
      setFilteredProjects(projects); // Show all projects
    } else {
      const filtered = projects.filter(
        (project) => project["Project Category"] === category
      );
      setFilteredProjects(filtered);
    }
  };

  return { projects, filteredProjects, filterProjects };
}
