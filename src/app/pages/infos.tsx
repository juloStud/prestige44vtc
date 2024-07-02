import Card from 'react-bootstrap/Card';

export default function Infos() {
  return (
    <div id="Accueil" className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">KER-V Vos Chauffeurs Privés</h1>
          <p className="text-center">Un service de qualité en toute sécurité</p></div>
        <div className="col-md-6 mx-auto">
          <video src="/assets/videos/video.mp4" controls className="w-100 object-fit-contain">
            Votre navigateur ne prend pas en charge la lecture de vidéos.
          </video>
        </div>
      </div>
      <Card className="bg-dark text-white col-md-3 mx-auto">
      <Card.Img src="../assets/images/valentin.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Valentin</Card.Title>
      </Card.ImgOverlay>
    </Card>
    </div>
  );
}