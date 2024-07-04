import { Container, Col, Row, Card } from 'react-bootstrap';

export default function Vehicules() {

    return (
        <Container fluid id="Vehicules" className="py-3">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1>Véhicules</h1>
                    <Row>
                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" src="/assets/images/s-class.jpg" />
                                <Card.Body>
                                    <Card.Title>Mercedes Classe S Limousine</Card.Title>
                                    <Card.Text>
                                        La Berline Mercedes class S est un véhicule d'exception qui à déjà transporté les plus grand hommes et les plus grandes femmes de la planête.<br /><br />
                                        Le confort de cette limousine n'est plus un secret.<br /><br />
                                        Nombre de passagers par berline : 2
                                        Nombre de bagages par berline : 1 grand bagage
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" src="/assets/images/v-class.jpg" />
                                <Card.Body>
                                    <Card.Title>Mercedes Classe V</Card.Title>
                                    <Card.Text>
                                        Le Van Mercedes class V est un véhicule très spacieux, il est donc parfait pour vos déplacements en famille ou entre amis, sur toute distance.<br /><br />
                                        Il offre un grand espace facilitant le confort. Ce véhicule est exactement ce qu’il vous faut pour vous déplacer en groupe en toute tranquillité.<br /><br />
                                        Nombre de passagers par van : 7<br />
                                        Nombre de bagages par van : 7 grands bagages<br />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}