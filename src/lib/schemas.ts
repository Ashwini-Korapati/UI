
import { z } from 'zod';

// Schema for Contact Form
export const ContactFormSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }).regex(/^\+?[0-9\s\-()]+$/, { message: 'Invalid phone number format' }),
  eventDate: z.date().optional(),
  location: z.string().optional(),
  message: z.string().min(5, { message: 'Message must be at least 5 characters' }).max(500, { message: 'Message cannot exceed 500 characters' }),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;


// Schema for Vendor Form
export const VendorFormSchema = z.object({
  fullName: z.string().min(1, { message: 'Full name is required' }),
  companyName: z.string().min(1, { message: 'Company name is required' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }).regex(/^\+?[0-9\s\-()]+$/, { message: 'Invalid phone number format' }),
  service: z.string().min(1, { message: 'Service provided is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  address: z.string().min(5, { message: 'Address is required' }),
  experience: z.preprocess(
     (val) => (val === '' ? undefined : Number(val)), // Handle empty string for optional number
     z.number().int().positive({ message: 'Experience must be a positive number' }).optional() // Make it optional
   ).or(z.literal(0)), // Allow 0 explicitly if needed
  comment: z.string().max(500, { message: 'Comment cannot exceed 500 characters' }).optional(),
});


export type VendorFormData = z.infer<typeof VendorFormSchema>;

