import { NextResponse } from 'next/server';
import { requestDemoSolutions } from '../../../data/contact';

const recipients = ['info@macrohealthplus.org', 'mizanur@macrohealthplus.org'];

type DemoRequest = {
  solution?: unknown;
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  contactNumber?: unknown;
  message?: unknown;
  consent?: unknown;
  companyWebsite?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] ?? character);
}

export async function POST(request: Request) {
  if (process.env.REQUEST_DEMO_EMAIL_ENABLED !== 'true') {
    return NextResponse.json({ error: 'Automatic email delivery is disabled.' }, { status: 503 });
  }

  let body: DemoRequest;

  try {
    body = await request.json() as DemoRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (clean(body.companyWebsite, 200)) {
    return NextResponse.json({ ok: true });
  }

  const solution = clean(body.solution, 100);
  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const email = clean(body.email, 160).toLowerCase();
  const contactNumber = clean(body.contactNumber, 60);
  const message = clean(body.message, 5000);
  const consent = clean(body.consent, 20);

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (
    !requestDemoSolutions.includes(solution)
    || !firstName
    || !lastName
    || !validEmail
    || !contactNumber
    || !message
    || consent !== 'accepted'
  ) {
    return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.REQUEST_DEMO_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error('Request demo email configuration is missing.');
    return NextResponse.json({ error: 'Email service is unavailable.' }, { status: 503 });
  }

  const fullName = `${firstName} ${lastName}`;
  const subject = `Demo request: ${solution} - ${fullName}`;
  const rows = [
    ['Selected solution', solution],
    ['Name', fullName],
    ['Email', email],
    ['Contact number', contactNumber],
    ['Consent', 'Accepted'],
  ];
  const text = [
    'New MacroHealthPlus demo request',
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    message,
  ].join('\n');
  const htmlRows = rows.map(([label, value]) => `
    <tr>
      <th style="padding:10px 14px;text-align:left;border-bottom:1px solid #e5e7eb;color:#475569;font-weight:600;vertical-align:top">${escapeHtml(label)}</th>
      <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#0f172a">${escapeHtml(value)}</td>
    </tr>`).join('');
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#0f172a">
      <div style="border-top:5px solid #01D439;padding:24px;border-radius:8px;background:#f8fafc">
        <p style="margin:0 0 8px;color:#01a72d;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase">MacroHealthPlus website</p>
        <h1 style="margin:0 0 22px;font-size:24px">New demo request</h1>
        <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #e5e7eb">${htmlRows}</table>
        <h2 style="margin:24px 0 8px;font-size:16px">Message</h2>
        <div style="padding:16px;border-left:3px solid #01D439;background:#fff;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</div>
      </div>
    </div>`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    console.error('Request demo email failed:', response.status, await response.text());
    return NextResponse.json({ error: 'Email could not be sent.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
