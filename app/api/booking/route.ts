import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function buildCalendarLinks(date: string, time: string) {
  const [year, month, day] = date.split('-').map(Number);
  const [timeStr, period] = time.split(' ');
  let [hours, minutes] = timeStr.split(':').map(Number);
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  const start = new Date(year, month - 1, day, hours, minutes);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');

  const title = encodeURIComponent('Eusopht Discovery Call');
  const details = encodeURIComponent('30-min discovery call with Eusopht.');

  const google = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(start)}/${fmt(end)}&details=${details}`;
  const outlook = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&body=${details}&startdt=${start.toISOString()}&enddt=${end.toISOString()}`;

  return { google, outlook };
}

export async function POST(req: Request) {
  try {
    const { name, email, company, phone, preferredDate, preferredTime, message } = await req.json();

    if (!name || !email || !preferredDate || !preferredTime) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const formattedDate = formatDate(preferredDate);
    const { google, outlook } = buildCalendarLinks(preferredDate, preferredTime);

    const confirmationHtml = `
      <h2>Booking Confirmed!</h2>
      <p>Dear ${name},</p>
      <p>Your discovery call with Eusopht has been confirmed.</p>
      <h3>Details:</h3>
      <ul>
        <li><strong>Date:</strong> ${formattedDate}</li>
        <li><strong>Time:</strong> ${preferredTime} (PKT)</li>
        ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
        ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ''}
      </ul>
      ${message ? `<p><strong>Your message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
      <div style="margin-top:20px;padding:15px;background:#f3f4f6;border-radius:8px;">
        <p style="margin:0 0 8px;font-weight:600;">Add to your calendar:</p>
        <a href="${google}" target="_blank" style="color:#2563eb;margin-right:16px;">Google Calendar</a>
        <a href="${outlook}" target="_blank" style="color:#2563eb;">Outlook</a>
      </div>
      <br>
      <p>We look forward to speaking with you.<br>— The Eusopht Team</p>
    `;

    const adminHtml = `
      <h2>New Discovery Call Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Date:</strong> ${formattedDate}</p>
      <p><strong>Time:</strong> ${preferredTime} (PKT)</p>
      ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
      <div style="margin-top:20px;padding:15px;background:#f3f4f6;border-radius:8px;">
        <a href="${google}" target="_blank" style="color:#2563eb;margin-right:16px;">Add to Google Calendar</a>
        <a href="${outlook}" target="_blank" style="color:#2563eb;">Add to Outlook</a>
      </div>
    `;

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail({
        from: `"Eusopht" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'Booking Confirmed — Eusopht Discovery Call',
        html: confirmationHtml,
      }),
      transporter.sendMail({
        from: `"Eusopht Bookings" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_TO,
        replyTo: email,
        subject: `New Booking — ${name} on ${formattedDate} at ${preferredTime}`,
        html: adminHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('Booking error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to process booking' },
      { status: 500 }
    );
  }
}
