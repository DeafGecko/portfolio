import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Save to database
    const saved = await prisma.contactMessage.create({
      data: { name, email, message }
    });

    // Send email notification to you (replace with your Gmail)
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Resend's sandbox sender (change later)
      to: 'dwirog@gmail.com',    // <-- REPLACE WITH YOUR EMAIL
      subject: `New message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>`
    });

    return NextResponse.json({ success: true, id: saved.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Error' }, { status: 500 });
  }
}
