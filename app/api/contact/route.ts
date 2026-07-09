import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_DzkkyGzg_HfjYKFVbiJEbUwNs7PDQBN6E');

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const htmlContent = `
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #121212; border-radius: 16px; overflow: hidden; border: 1px solid #2a2a2a; color: #ffffff;">
        <div style="background-color: #1a1a1a; padding: 32px; text-align: center; border-bottom: 2px solid #C4874A;">
          <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">New Message from <span style="color: #C4874A;">Portfolio</span></h1>
          <p style="margin: 8px 0 0; color: #888888; font-size: 14px;">You have received a new contact form submission.</p>
        </div>
        
        <div style="padding: 32px;">
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 8px; font-size: 12px; color: #888888; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Sender Name</p>
            <p style="margin: 0; font-size: 16px; color: #ffffff; font-weight: 500;">${name}</p>
          </div>
          
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 8px; font-size: 12px; color: #888888; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Email Address</p>
            <a href="mailto:${email}" style="margin: 0; font-size: 16px; color: #C4874A; text-decoration: none; font-weight: 500;">${email}</a>
          </div>
          
          <div style="margin-bottom: 0;">
            <p style="margin: 0 0 12px; font-size: 12px; color: #888888; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Message Content</p>
            <div style="background-color: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 12px; padding: 20px;">
              <p style="margin: 0; font-size: 15px; color: #e0e0e0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
        
        <div style="background-color: #1a1a1a; padding: 20px; text-align: center; border-top: 1px solid #2a2a2a;">
          <p style="margin: 0; font-size: 12px; color: #666666;">This email was sent securely from your Next.js Portfolio via Resend.</p>
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'pianprams3@gmail.com', // Using the email from the onboarding snippet
      subject: `New Message from ${name} - Portfolio`,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 });
  }
}
