import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Hotel Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/rooms">Rooms</NavLink>
                        <NavLink className="nav-link" to="/book">Book a Room</NavLink>
                        <NavLink className="nav-link" to="/add-room">Add Room</NavLink>
                        <NavLink className="nav-link" to="/add-admin">Add Admin</NavLink>
                        <NavLink className="nav-link" to="/add-reservation">Add Reservation</NavLink>
                        {/* Add other navigation links as needed */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
