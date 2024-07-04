import { Card, Col, Container, Row } from 'react-bootstrap';
import { Villes } from "../model/villes";

export default function Prestations() {
    const options = Object.keys(Villes);

    return (
        <Container fluid id="Prestations" className="py-5" style={{ backgroundColor: "#f8f8f8" }}>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1>Prestations</h1>
                    <Row className='my-3'>
                        <Col>
                            <Card className="h-100">
                                <Card.Header style={{ backgroundColor: '#303030', color: '#ffffff' }}>Mise à Disposition</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Pour une mise à disposition, vous pouvez réserver un ou plusieurs chauffeurs. Notre flotte sera capable de répondre à votre demande.
                                        Vous avez besoin d’un chauffeur pour une matinée, une après-midi, une soirée ou pour toute la journée ? C’est possible.
                                        Pour un Mariage,un séminaire, une soirée privée, un festival, nous sommes là !
                                        N'hésitez pas à nous transmettre toute demande spécifique (champagne, décoration du véhicule, ...).
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100">
                                <Card.Header style={{ backgroundColor: '#303030', color: '#ffffff' }}>Circulation</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Un véhicule haut de gamme avec chauffeur pour une réservation de quelques heures, ou une journée entière, pour circuler dans les Pays de la Loire ou en Bretagne.
                                        Vous avez un agenda chargé ? Nous serons là pour vous guider.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="h-100">
                                <Card.Header style={{ backgroundColor: '#303030', color: '#ffffff' }}>Transferts Aéroport et Gares</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Pour une prise en charge à l’aéroport ou en gare, n’attendez plus ! Nous vous accueillerons sur le quai ou à la sortie des bagages avec une pancarte
                                        Nous sommes en mesure de vous prendre en charge à ses aéroports et gares :<br />
                                        - Aéroport Nantes Atlantique & Gare<br />
                                        - Angers Loire Airport & Gare<br />
                                        - Aéroport du pays d'ancenis & Gare<br />
                                        - Aéroport de la Roche-sur-Yon & Gare<br />
                                        - Aéroport de Laval et de la Mayenne & Gare<br />
                                        - Aéroport Saint-Nazaire Montoir<br />
                                        - Aéroport Le Mans Arnage & Gare<br />
                                        - Aéroport de Tours Val de Loire & Gare<br />
                                        - Aéroport de Poitiers-Biard & Gare<br />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100">
                                <Card.Header style={{ backgroundColor: '#303030', color: '#ffffff' }}>Trajet Classique</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Pour vos besoins de déplacement, nous vous proposons notre service "Transport Classique".<br /><br />
                                        Nous mettons à votre disposition un de nos véhicules Mercedes avec toutes les garanties de confort.<br /><br />
                                        Naviguez en toute sérénité vers votre destination, en profitant de notre expertise et de notre savoir-faire.<br /><br />
                                        Vous avez un emploi du temps serré ? Nous serons à vos côtés pour vous conduire là où vous devez être, en toute ponctualité et avec le plus grand soin. 
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