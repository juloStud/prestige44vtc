import { useState } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Services } from '../model/services';
import { Villes } from '../model/villes';
import { Vehicules } from '../model/vehicules';
import { TypeClientele } from '../model/type-clientele';

export default function FormulaireDevis() {

    const sendEmail = async (data) => {
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

        } catch (error) {
            console.log(error);
        }
    };

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        const data = {
            nom: form.elements.nom.value || '',
            prenom: form.elements.prenom.value || '',
            email: form.elements.email.value || '',
            phonenumber: form.elements.phonenumber.value || '',
            clientType: form.elements.clientType.value || '',
            service: form.elements.service.value || '',
            ville: form.elements.ville.value || '',
            vehicule: form.elements.vehicule.value || '',
            demandesupp: form.elements.demandesupp.value || '',
        };
        sendEmail(data);
        setValidated(true);
    };

    return (
        <Container fluid id="Devis" className="mt-5 py-4">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="text-left">Demande de Devis</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="my-3">
                            <Col>
                                <FloatingLabel controlId="nom" label="Nom">
                                    <Form.Control type="text" placeholder="Nom" required />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel controlId="prenom" label="Prenom">
                                    <Form.Control type="text" placeholder="Prenom" required />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <FloatingLabel controlId="email" label="Adresse Email">
                                    <Form.Control type="email" placeholder="name@example.com" required />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel controlId="phonenumber" label="Numéro de téléphone">
                                    <Form.Control type="tel" placeholder="Entrez votre numéro de téléphone"
                                        pattern="[0-9]{10}"
                                        required />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <Form.Group controlId="service">
                                    <Form.Select className='my-3' aria-label="Service" required>
                                        <option>Choisissez votre service</option>
                                        {Services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="ville">
                                    <Form.Select className='my-3' aria-label="Ville" required>
                                        <option>Choisissez votre ville</option>
                                        {Villes.map((ville, index) => (
                                            <option key={index} value={ville}>{ville}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                            <Form.Group controlId="vehicule">
                                    <Form.Select className='my-3' aria-label="Vehicule" required>
                                        <option>Choisissez votre véhicule</option>
                                        {Vehicules.map((vehicule, index) => (
                                            <option key={index} value={vehicule}>{vehicule}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group controlId="clientType">
                                    <Form.Select className='my-3' aria-label="type de client" required>
                                        <option>Type d'utilisateur</option>
                                        {TypeClientele.map((clientele, index) => (
                                            <option key={index} value={clientele}>{clientele}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="demandesupp">
                            <Form.Label>Demande additionnelle</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Row md={3}>
                            <Button type="submit" size="lg" className='mx-auto' style={{ backgroundColor: '#303030', color: '#ffffff', borderColor: '#fff' }}>Envoyer demande</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}