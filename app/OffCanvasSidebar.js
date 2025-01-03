import { Drawer, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProjectDropdown from "@/components/ProjectDropdown";
import ProjectList from "@/components/ProjectList";
import {
  sidebarContainerStyles,
  headerContainerStyles,
  dropdownStyles,
  projectListTitleStyles,
} from "@/styles/OffCanvasSidebarStyles";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Sidebar({
  open,
  onClose,
  onSelectCategory,
  filteredProjects,
  onFlyTo,
  onMoreDetails,
}) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={sidebarContainerStyles}>
        <Box sx={headerContainerStyles}>
          <Typography variant="h6">Projects</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
            
          </IconButton>
        </Box>
        <DarkModeToggle/>
        <Box sx={dropdownStyles}>
          <ProjectDropdown onSelectCategory={onSelectCategory} />
          
        </Box>
        <Typography variant="subtitle1" sx={projectListTitleStyles}>
          Project List:
        </Typography>
        <ProjectList
          projects={filteredProjects}
          onFlyTo={onFlyTo}
          onMoreDetails={onMoreDetails}
        />
      </Box>
    </Drawer>
  );
}
