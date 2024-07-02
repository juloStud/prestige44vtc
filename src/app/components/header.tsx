import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    const sendEmail = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/send', { method: 'POST' });
        } catch (error) {
            console.log(error)
        };
    }

    return (
      <Row className='my-5'>
        <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#Home">
            <img src="/assets/images/logo-ker-v.png" alt="Logo" width="50" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Accueil">Accueil</Nav.Link>
              <Nav.Link href="#Prestations">Prestations</Nav.Link>
              <Nav.Link href="#Devis">Devis</Nav.Link>
              <Nav.Link href="#Contact" onClick={sendEmail}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Row>
    );
}