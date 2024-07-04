import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {

    return (
      <Row>
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className='pb-0'>
        <Container fluid>
          <Navbar.Brand href="/" className='ml-5'>
            <img src="/assets/images/logo-ker-v.png" alt="Logo" width="50" height="50" className='ml-5' />
            <span className="text-white">Ker-V</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="text-white">Accueil</Nav.Link>
              <Nav.Link href="#Vehicules" className="text-white">Véhicules</Nav.Link>
              <Nav.Link href="#Prestations" className="text-white">Prestations</Nav.Link>
              <Nav.Link href="#Devis" className="text-white">Devis</Nav.Link>
              <Nav.Link href="#Contact" className="text-white">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Row>
    );
}