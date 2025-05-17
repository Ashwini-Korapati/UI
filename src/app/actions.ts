
'use server';

import nodemailer from 'nodemailer';
import { format } from 'date-fns';
import { ContactFormData, ContactFormSchema, VendorFormData, VendorFormSchema } from '@/lib/schemas';

// Log environment variables at the module level to see if they are loaded when the server starts/module is imported
console.log('--- Environment Variables Check (Module Load) ---');
console.log('EMAIL_SERVER_USER (on load):', process.env.EMAIL_SERVER_USER ? `'${process.env.EMAIL_SERVER_USER}'` : 'NOT SET');
console.log('EMAIL_SERVER_PASSWORD (on load):', process.env.EMAIL_SERVER_PASSWORD ? 'SET (exists)' : 'NOT SET'); // Avoid logging password
console.log('EMAIL_RECIPIENT (on load):', process.env.EMAIL_RECIPIENT ? `'${process.env.EMAIL_RECIPIENT}'` : 'NOT SET');
console.log('------------------------------------------------');


// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

async function sendEmailNotification(subject: string, htmlContent: string): Promise<void> {
  const mailOptions = {
    from: process.env.EMAIL_SERVER_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: subject,
    html: htmlContent,
  };

  await transporter.sendMail(mailOptions);
}

function checkEnvVars(): { configured: boolean; debugMessage: string } {
  const serverUserSet = !!process.env.EMAIL_SERVER_USER;
  const serverPasswordSet = !!process.env.EMAIL_SERVER_PASSWORD;
  const recipientSet = !!process.env.EMAIL_RECIPIENT;

  let debugMessage = "Debug Info: ";
  debugMessage += `EMAIL_SERVER_USER found by server action: ${serverUserSet}. `;
  debugMessage += `EMAIL_SERVER_PASSWORD found by server action: ${serverPasswordSet}. `;
  debugMessage += `EMAIL_RECIPIENT found by server action: ${recipientSet}. `;
  debugMessage += "Check SERVER terminal for 'Module Load' logs. Ensure .env.local is in project ROOT and server was RESTARTED after changes to .env.local.";

  if (!serverUserSet || !serverPasswordSet || !recipientSet) {
    console.error(`Critical Error: Email server environment variables issue. ${debugMessage}`);
    return { configured: false, debugMessage };
  }
  return { configured: true, debugMessage: "Environment variables seem configured." };
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  console.log('[ContactForm] Attempting to send email. Values at time of call:');
  console.log('[ContactForm] EMAIL_SERVER_USER:', process.env.EMAIL_SERVER_USER ? `'${process.env.EMAIL_SERVER_USER}'` : 'NOT SET');
  console.log('[ContactForm] EMAIL_SERVER_PASSWORD:', process.env.EMAIL_SERVER_PASSWORD ? 'SET (exists)' : 'NOT SET');
  console.log('[ContactForm] EMAIL_RECIPIENT:', process.env.EMAIL_RECIPIENT ? `'${process.env.EMAIL_RECIPIENT}'` : 'NOT SET');

  const envCheck = checkEnvVars();
  if (!envCheck.configured) {
    return { success: false, message: `Email service configuration error. ${envCheck.debugMessage}` };
  }

  try {
    const validatedData = ContactFormSchema.parse(data);

    const subject = 'New Contact Form Submission - Events Unlimited';
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p>You have received a new message through the Events Unlimited contact form:</p>
      <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <tbody>
          <tr><td style="width: 30%;"><strong>First Name:</strong></td><td>${validatedData.firstName}</td></tr>
          <tr><td><strong>Last Name:</strong></td><td>${validatedData.lastName}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${validatedData.email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${validatedData.phone}</td></tr>
          <tr><td><strong>Approx. Event Date:</strong></td><td>${validatedData.eventDate ? format(validatedData.eventDate, 'MM/dd/yyyy') : 'Not provided'}</td></tr>
          <tr><td><strong>Location:</strong></td><td>${validatedData.location || 'Not provided'}</td></tr>
          <tr><td><strong>Message:</strong></td><td>${validatedData.message.replace(/\n/g, '<br>')}</td></tr>
        </tbody>
      </table>
    `;

    await sendEmailNotification(subject, htmlContent);
    console.log('Contact form email sent for:', validatedData.email);

    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Contact form submission error:', error);
    let errorMessage = 'An unknown error occurred while submitting the form.';
    if (error instanceof Error) {
      if ('issues' in error && Array.isArray((error as any).issues)) {
        errorMessage = `Validation failed: ${(error as any).issues.map((e: any) => e.message).join(', ')}`;
      } else {
        errorMessage = `An error occurred: ${error.message}`;
      }
    }
    return { success: false, message: errorMessage };
  }
}

export async function submitVendorForm(data: VendorFormData): Promise<{ success: boolean; message: string }> {
   console.log('[VendorForm] Attempting to send email. Values at time of call:');
   console.log('[VendorForm] EMAIL_SERVER_USER:', process.env.EMAIL_SERVER_USER ? `'${process.env.EMAIL_SERVER_USER}'` : 'NOT SET');
   console.log('[VendorForm] EMAIL_SERVER_PASSWORD:', process.env.EMAIL_SERVER_PASSWORD ? 'SET (exists)' : 'NOT SET');
   console.log('[VendorForm] EMAIL_RECIPIENT:', process.env.EMAIL_RECIPIENT ? `'${process.env.EMAIL_RECIPIENT}'` : 'NOT SET');

  const envCheck = checkEnvVars();
  if (!envCheck.configured) {
    return { success: false, message: `Email service configuration error. ${envCheck.debugMessage}` };
  }

   try {
    const validatedData = VendorFormSchema.parse(data);

    const subject = 'New Vendor Application - Events Unlimited';
    const htmlContent = `
      <h2>New Vendor Application</h2>
      <p>A new vendor application has been submitted through the Events Unlimited website:</p>
      <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <tbody>
          <tr><td style="width: 30%;"><strong>Full Name:</strong></td><td>${validatedData.fullName}</td></tr>
          <tr><td><strong>Company Name:</strong></td><td>${validatedData.companyName}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${validatedData.phone}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${validatedData.email}</td></tr>
          <tr><td><strong>Service Provided:</strong></td><td>${validatedData.service}</td></tr>
          <tr><td><strong>Address:</strong></td><td>${validatedData.address.replace(/\n/g, '<br>')}</td></tr>
          <tr><td><strong>Experience (Years):</strong></td><td>${validatedData.experience !== undefined ? validatedData.experience : 'Not provided'}</td></tr>
          <tr><td><strong>Additional Comment:</strong></td><td>${validatedData.comment ? validatedData.comment.replace(/\n/g, '<br>') : 'Not provided'}</td></tr>
        </tbody>
      </table>
    `;

    await sendEmailNotification(subject, htmlContent);
    console.log('Vendor form email sent for:', validatedData.companyName);

    return { success: true, message: 'Your vendor application has been submitted successfully!' };
  } catch (error) {
    console.error('Vendor form submission error:', error);
    let errorMessage = 'An unknown error occurred while submitting the form.';
    if (error instanceof Error) {
       if ('issues' in error && Array.isArray((error as any).issues)) {
         errorMessage = `Validation failed: ${(error as any).issues.map((e: any) => e.message).join(', ')}`;
       } else {
        errorMessage = `An error occurred: ${error.message}`;
       }
    }
    return { success: false, message: errorMessage };
  }
}
