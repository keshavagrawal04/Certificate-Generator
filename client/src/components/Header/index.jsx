import { Container, Nav, Navbar } from 'react-bootstrap';
import { BiMenu } from 'react-icons/bi';
import { NavLink, Link } from 'react-router-dom';
import ssism from '../../assets/ssism.png';

const Header = () => {

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#fff', zIndex: '1' }} className="position-sticky w-100 top-0 border">
            <Container >
                <Link to="/" className="fs-2"><img src={ssism} /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <BiMenu size={30} />
                </ Navbar.Toggle>
                <Navbar.Collapse style={{ zIndex: "2" }} id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5 d-flex gap-2 justify-content-center gap-4 mb-0">
                        <NavLink to="/" className="text-decoration-none text-dark">Home</NavLink>
                        <NavLink to="/generate-certificate" className="text-decoration-none text-dark">Generate Certificate</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
