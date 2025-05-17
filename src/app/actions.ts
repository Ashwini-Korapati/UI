
'use server';

import nodemailer from 'nodemailer';
import { format } from 'date-fns';
import { ContactFormData, ContactFormSchema, VendorFormData, VendorFormSchema } from '@/lib/schemas';

// Nodemailer transporter setup
// Ensure EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD, and EMAIL_RECIPIENT are set in your .env.local file
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

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const validatedData = ContactFormSchema.parse(data);

    // Prepare email content
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

    // Send email
    await sendEmailNotification(subject, htmlContent);
    console.log('Contact form email sent for:', validatedData.email);

    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Contact form submission error:', error);
    let errorMessage = 'An unknown error occurred while submitting the form.';
    if (error instanceof Error) {
      // Check for Zod validation errors
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
   try {
    const validatedData = VendorFormSchema.parse(data);

    // Prepare email content
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

    // Send email
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
