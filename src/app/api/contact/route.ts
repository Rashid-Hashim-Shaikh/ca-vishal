import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

async function sendEmailWithNodemailer(content: string, fromEmail: string, fromName: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'info@vishalsingh.com', // Your email where you want to receive messages
    subject: `New Contact Form Submission from ${fromName}`,
    text: content,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          🔔 New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>👤 Name:</strong> ${fromName}</p>
          <p><strong>📧 Email:</strong> <a href="mailto:${fromEmail}">${fromEmail}</a></p>
          <p><strong>📱 Phone:</strong> ${content.includes('Not provided') ? 'Not provided' : content.match(/Phone: (.+)/)?.[1] || 'Not provided'}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">💬 Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${content.split('Message:')[1]?.split('---')[0]?.trim() || 'No message provided'}</p>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; color: #6b7280; font-size: 14px;">
          <p>📅 <strong>Received:</strong> ${new Date().toLocaleString()}</p>
          <p>🌐 <strong>Source:</strong> CA Vishal Singh & Associates Website</p>
        </div>
      </div>
    `,
    replyTo: fromEmail
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      New Contact Form Submission from CA Website
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      
      Message:
      ${message}
      
      ---
      Sent from CA Vishal Singh & Associates website
    `;

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials not configured. Logging submission instead.');
      console.log('Contact form submission:', {
        name,
        email,
        phone,
        message,
        timestamp: new Date().toISOString(),
        emailContent
      });
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message! We will get back to you soon.' 
        },
        { status: 200 }
      );
    }

    // Send email
    await sendEmailWithNodemailer(emailContent, email, name);

    // Log successful submission
    console.log('Email sent successfully for:', {
      name,
      email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { error: 'Email configuration error. Please try again later.' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 