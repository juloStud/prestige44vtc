import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';
import { createReservationPDF } from '../../utils/pdf-generator';

const resend = new Resend(process.env.RESEND_API_KEY);
const destEmail = process.env.RESEND_EMAIL_DEST;
const reservationData = {
  date: 'xx/xx/2024',
  client: '',
  chauffeur: 'Valentin',
  vehicleType: '',
  vehicle: '',
  service: '',
  passengers: '',
  driverNote: '',
  reference: '',
  pickupTime: '',
  pickupLocation: '',
  destination: '',
  arrivalTime: '',
  departureTime: '',
  returnTime: '',
  departureKm: '/',
  arrivalKm: '/',
  totalKm: '/',
  meal: '/',
  observations: '',
  parking: '/',
  toll: '/',
  misc: '/',
  totalExpenses: '/',
};

export async function POST(req) {
  try {
    const informations = await req.json();
    const pdfBuffer = await createReservationPDF(reservationData);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [destEmail],
      subject: 'Réservation',
      react: EmailTemplate({ data: informations }),
      attachments: [
        {
          filename: 'bon_de_reservation.pdf',
          content: Buffer.from(pdfBuffer).toString('base64'),
          content_type: 'application/pdf',
        },
      ],
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
