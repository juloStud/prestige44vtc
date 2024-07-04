import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export default function Infos() {
  return (
    <div id="Accueil" style={{ overflowX: 'hidden' }}>
      <Container fluid className="position-relative p-0 mt-5" style={{ backgroundColor: "#f8f8f8" }}>
        <Row className="mx-0 my-5">
          <Col xs={12} className="px-0 position-relative">
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
            <video src="/assets/videos/video.mp4" autoPlay loop muted className="w-100 vh-100 object-fit-cover"></video>
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
              <div className="text-white text-center">
                <h1>KER-V Vos Chauffeurs Privés</h1>
                <p>Un service de qualité en toute sécurité</p>
                <Button href='#Informations' style={{ backgroundColor: '#303030', color: '#ffffff', borderColor: '#fff' }}>Nous découvrir</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row id="Informations" className="justify-content-center mt-5">
          <Col md={8} className='text-center'>
            <h1>Chauffeur VTC depuis 2015, je comprend parfaitement vos besoins et vos exigences.</h1><br />
            <p>Notre service haut de gamme répondra pour le mieux à vos souhaits, selon des valeurs dignes de votre confiance en nos prestations. Que vous soyez un particulier<br />
              ou un professionnel, vous trouverez le véhicule qui vous convient.<br /><br /></p>
          </Col>
        </Row>
        <Row className='py-5'>
          <Col xs={10} md={2} className="mx-auto">
            <Card className="bg-dark text-white">
              <Card.Img src="../assets/images/valentin.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Valentin</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8} className="text-center">
          <h2>Nos zones d'interventions</h2>
            <p>
              Nous sommes présents entre Nantes et Angers et nous pouvons réaliser la gestion des transports de votre événement dans tout l’ouest de la France.
              Notre particularité est d’offrir un service professionnel et discret que cela soit pour une mission régulière ou ponctuelle.

            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}