import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Services } from '../model/services';

export default function FormulaireDevis() {
    const [isParticulier, setIsParticulier] = useState(true);
    const [isProfessionnel, setIsProfessionnel] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        let inputValue = event.target.value.replace(/\D/g, ''); // Supprimer tous les caractères non numériques
        inputValue = inputValue.slice(0, 10); // Limiter à 10 chiffres

        let formattedValue = '';
        for (let i = 0; i < inputValue.length; i++) {
            if (i > 0 && i % 2 === 0) {
                formattedValue += '-';
            }
            formattedValue += inputValue[i];
        }

        setPhoneNumber(formattedValue);
    };

    return (
        <div id="Devis" className="container my-5">
            <h1>Demande de Devis</h1>
            <Form>
                <Row className="my-3">
                    <Col>
                        <FloatingLabel controlId="nom" label="Nom">
                            <Form.Control type="text" placeholder="Nom" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="prenom" label="Prenom">
                            <Form.Control type="text" placeholder="Prenom" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col>
                        <FloatingLabel controlId="email" label="Adresse Email">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="phonenumber" label="Numéro de téléphone">
                            <Form.Control type="tel" placeholder="Entrez votre numéro de téléphone"
                                pattern="[0-9]{10}"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                maxLength={14}
                                required />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col>
                        <Button
                            variant={isParticulier ? 'primary' : 'outline-primary'}
                            className="w-100"
                            onClick={() => {
                                setIsParticulier(true);
                                setIsProfessionnel(false);
                            }}
                        >
                            Particulier
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            variant={isProfessionnel ? 'primary' : 'outline-primary'}
                            className="w-100"
                            onClick={() => {
                                setIsParticulier(false);
                                setIsProfessionnel(true);
                            }}
                        >
                            Professionnel
                        </Button>
                    </Col>
                </Row>

                <Form.Select className='my-3' aria-label="Demande additionnelle">
                    {Services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                    ))}
                </Form.Select>
                <Form.Group className="mb-3" controlId="demandesupp">
                    <Form.Label>Demande additionnelle</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>


            </Form>
        </div>
    );
}