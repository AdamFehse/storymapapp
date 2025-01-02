// components/ProjectDropdown.js
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function ProjectDropdown({ onSelectCategory }) {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Select Category"
      onSelect={onSelectCategory}
    >
      <Dropdown.Item
        eventKey="All"
        onClick={() => onSelectCategory("")}
      >
        All Projects
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="Art-Based Projects"
        onClick={() => onSelectCategory("Art-Based Projects")}
      >
        Art-Based Projects
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="Research Projects"
        onClick={() => onSelectCategory("Research Projects")}
      >
        Research Projects
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="Education and Community Outreach"
        onClick={() => onSelectCategory("Education and Community Outreach")}
      >
        Education and Community Outreach
      </Dropdown.Item>
    </DropdownButton>
  );
}
