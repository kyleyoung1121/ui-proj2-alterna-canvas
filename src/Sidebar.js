import Nav from 'react-bootstrap/Nav';

function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Announcements</Nav.Link>
      <Nav.Link eventKey="link-1">Modules</Nav.Link>
      <Nav.Link eventKey="link-2">Assignments</Nav.Link>
      <Nav.Link eventKey="link-2">Zoom</Nav.Link>
      <Nav.Link eventKey="link-2" disabled>Grades</Nav.Link>
      <Nav.Link eventKey="link-2">Syllabus</Nav.Link>
    </Nav>
  );
}

export default Sidebar;