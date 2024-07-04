import * as React from 'react';

interface EmailTemplateProps {
  data: {
    nom: string;
    prenom: string;
    email: string;
    phonenumber: string;
    clientType: string;
    service: string;
    ville: string;
    vehicule: string;
    demandesupp: string;
  };
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  data
}) => (
<body>
    <h1>Nouvelle demande de devis</h1>
    <p>Voici les détails de la demande de devis :</p>
    <table>
        <tr>
            <th>Nom</th>
            <td>{data.nom}</td>
        </tr>
        <tr>
            <th>Prénom</th>
            <td>{data.prenom}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>{data.email}</td>
        </tr>
        <tr>
            <th>Numéro de téléphone</th>
            <td>{data.phonenumber}</td>
        </tr>
        <tr>
            <th>Type de client</th>
            <td>{data.clientType}</td>
        </tr>
        <tr>
            <th>Service</th>
            <td>{data.service}</td>
        </tr>
        <tr>
            <th>Ville</th>
            <td>{data.ville}</td>
        </tr>
        <tr>
            <th>Véhicule</th>
            <td>{data.vehicule}</td>
        </tr>
        <tr>
            <th>Demande supplémentaire</th>
            <td>{data.demandesupp}</td>
        </tr>
    </table>
</body>
);
