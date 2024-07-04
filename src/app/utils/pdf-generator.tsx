const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');

export async function createReservationPDF(data): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    // Charger le logo depuis le fichier PNG
    const logoPath = './assets/images/logo-ker-v.png';
    const logoImageBytes = fs.readFileSync(`./public/${logoPath}`);
    const logoImage = await pdfDoc.embedPng(logoImageBytes);

    // Calculer les dimensions du logo en fonction de la taille souhaitée
    const logoWidth = 100;
    const logoHeight = (logoImage.height / logoImage.width) * logoWidth;

    // Dessiner le logo dans le coin supérieur droit
    page.drawImage(logoImage, {
        x: width - logoWidth - 50,
        y: height - logoHeight - 50,
        width: logoWidth,
        height: logoHeight,
    });

    interface DrawTextOptions {
        size?: number;
        bold?: boolean;
    }

    const drawText = (text: string, x: number, y: number, options: DrawTextOptions = {}) => {
        const { size = 12, bold = false } = options;
        page.drawText(text, {
            x,
            y,
            size,
            font: bold ? boldFont : font,
        });
    };

    // En-tête
    drawText('KER-V vos chauffeurs privés', 50, height - 50, { size: 18, bold: true });
    drawText('Bon de réservation :', 50, height - 70, { size: 16 });

    // Détails de la réservation
    drawText(`Date : ${data.date}`, 50, height - 100);
    drawText(`Client : ${data.client}`, 50, height - 120);
    drawText(`Chauffeur : ${data.chauffeur}`, 50, height - 140);
    drawText(`Type de véhicule : ${data.vehicleType}`, 50, height - 160);
    drawText(`Véhicule : ${data.vehicle}`, 50, height - 180);
    drawText(`Service : ${data.service}`, 50, height - 200);
    drawText(`Passager(s) : ${data.passengers}`, 50, height - 220);
    drawText(`Note au chauffeur : ${data.driverNote}`, 50, height - 240);
    drawText(`Référence mission : ${data.reference}`, 50, height - 260);

    // Prise en charge et itinéraire
    drawText('Prise en charge :', 50, height - 300, { size: 14, bold: true });
    drawText(`${data.pickupTime} - ${data.pickupLocation}`, 50, height - 320);
    drawText('Itinéraire :', 50, height - 350, { size: 14, bold: true });
    drawText(`Destination : ${data.destination}`, 50, height - 370);
    drawText(`${data.arrivalTime}`, 50, height - 390);

    // Détails du chauffeur
    drawText('Heure départ garage', 50, height - 430);
    drawText(data.departureTime, 200, height - 430);
    drawText('Heure retour garage', 50, height - 450);
    drawText(data.returnTime, 200, height - 450);
    drawText('Km départ', 50, height - 470);
    drawText(data.departureKm, 200, height - 470);
    drawText('Km arrivée', 50, height - 490);
    drawText(data.arrivalKm, 200, height - 490);
    drawText('TOTAL km', 50, height - 510);
    drawText(data.totalKm, 200, height - 510);

    // Observations et débours
    drawText('Repas', 50, height - 550);
    drawText(data.meal, 200, height - 550);
    drawText('Observations de fin de mission', 50, height - 570);
    drawText(data.observations, 200, height - 570);
    drawText('Débours Chauffeur sur justificatifs', 50, height - 600, { size: 14, bold: true });
    drawText('Parking', 50, height - 620);
    drawText(data.parking, 200, height - 620);
    drawText('Péage', 50, height - 640);
    drawText(data.toll, 200, height - 640);
    drawText('Divers', 50, height - 660);
    drawText(data.misc, 200, height - 660);
    drawText('Total', 50, height - 680);
    drawText(data.totalExpenses, 200, height - 680);

    // Pied de page
    drawText('KER-V', 50, 50);
    drawText('Sarl au Capital de 1000€', 50, 30);
    drawText('RCS Angers. Siren 821482346', 50, 10);

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
}
