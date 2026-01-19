import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    console.log('📧 Received form data:', { name, email, subject, messageLength: message?.length });

    if (!name || !email || !subject || !message) {
      console.error('❌ Missing required fields:', { name: !!name, email: !!email, subject: !!subject, message: !!message });
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
    }

    // Check env variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('❌ Missing SMTP environment variables');
      return NextResponse.json({ error: 'Configuration SMTP manquante' }, { status: 500 });
    }

    console.log('🔧 SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASSWORD
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Test connection
    console.log('🔌 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified');

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Helvetica', Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background-color: #D32F2F; padding: 30px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; }
          .content { padding: 40px 30px; color: #333333; }
          .intro { font-size: 16px; color: #555; margin-bottom: 30px; text-align: center; }
          .grid { display: table; width: 100%; border-collapse: collapse; margin-bottom: 30px; }
          .row { display: table-row; }
          .col { display: table-cell; width: 50%; padding: 12px; border-bottom: 1px solid #eeeeee; }
          .label { font-size: 11px; text-transform: uppercase; color: #888; letter-spacing: 0.5px; margin-bottom: 5px; display: block; }
          .value { font-size: 15px; font-weight: 500; color: #111; display: block; }
          .message-block { background-color: #f8fafc; border-left: 4px solid #D32F2F; padding: 20px; border-radius: 4px; margin-top: 10px; }
          .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #eee; }
          .footer a { color: #D32F2F; text-decoration: none; font-weight: 600; }
          .footer a:hover { text-decoration: underline; }
          .button { display: inline-block; background-color: #D32F2F; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nouveau Message Client</h1>
          </div>
          <div class="content">
            <p class="intro">Vous avez reçu un nouveau message via le site <strong>PAPYCOTY Store</strong>.</p>
            
            <div class="grid">
              <div class="row">
                <div class="col">
                  <span class="label">Nom</span>
                  <span class="value">${name}</span>
                </div>
                <div class="col">
                  <span class="label">Sujet</span>
                  <span class="value" style="color: #D32F2F;">${subject}</span>
                </div>
              </div>
              <div class="row">
                <div class="col" colspan="2" style="width: 100%;">
                  <span class="label">Email</span>
                  <span class="value"><a href="mailto:${email}" style="color: #111; text-decoration: none;">${email}</a></span>
                </div>
              </div>
            </div>

            <div style="margin-top: 20px;">
              <span class="label">Message</span>
              <div class="message-block">
                ${message}
              </div>
            </div>

            <div style="text-align: center;">
              <a href="mailto:${email}?subject=RE: ${subject}" class="button">Répondre au Client</a>
            </div>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} PAPYCOTY Store. Tous droits réservés.</p>
            <p style="margin-top: 8px;">Développé par <a href="https://solumentics.com" target="_blank">Solumentics</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log('📨 Sending email...');
    const info = await transporter.sendMail({
      from: `"PAPYCOTY Store" <${process.env.SMTP_USER}>`,
      to: 'info@papycoty.com',
      replyTo: email,
      subject: `Nouveau Message: ${subject} - ${name}`,
      html: htmlContent,
    });

    console.log('✅ Email sent successfully:', info.messageId);
    return NextResponse.json({ message: 'Message envoyé avec succès' }, { status: 200 });
    
  } catch (error) {
    console.error('❌ Email Error:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json({ 
      error: 'Échec de l\'envoi',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}