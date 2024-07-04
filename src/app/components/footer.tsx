import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark py-3" style={{ color: '#B7B7B7', fontSize: '10px' }}>
      <Container>
        <Row>
          <Col md={3} className="text-center text-md-start">
            <p className="mb-1">
              <FaPhone className="me-2" />
              06.37.70.39.07
            </p>
            <p className="mb-0">
              <FaEnvelope className="me-2" />
              <a href="mailto:prestige.vtc.reservation@gmail.com" style={{ color: '#B7B7B7', textDecoration: 'none' }}>
                prestige.vtc.reservation@gmail.com
              </a>
            </p>
          </Col>
          <Col md={6} className="text-center text-md-center">
            <p className="mb-0">
              © KER-V |{' '}
              <a
                href="./assets/cgv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                CONDITIONS GÉNÉRALES DE VENTE
              </a>{' '}
              |{' '}
              <a
                href="./assets/politiqueconfidentialite.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                POLITIQUE DE CONFIDENTIALITÉ
              </a>{' '}
              | LICENCE VTC : EVTC044166578
            </p>
            <p className="mb-0">
              NANTES - ANGERS - ANCENIS - CHOLET - SAINT-NAZAIRE - TOURS - LAVAL - LE MANS - LA ROCHE-SUR-YON - CHÂTEAUBRIANT - POITIERS
            </p>
          </Col>
          <Col md={3} className="text-center text-md-end mt-3 mt-md-0">
            <a href="https://www.instagram.com/ker_v_vos_chauffeurs_prives/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/instagram.png" alt="Instagram" className="me-2" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://www.facebook.com/vtc44/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/facebook.png" alt="Facebook" className="me-2" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://www.linkedin.com/company/ker-v/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/linkedin.png" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;