import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Log the data to the console for now
    console.log("New Registration Received:", data);

    // HERE: You would integrate Resend, Nodemailer, or another service
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'NeuroDev.in <onboarding@resend.dev>',
      to: ['your-email@example.com'],
      subject: 'New Registration: ' + data.fullName,
      text: JSON.stringify(data, null, 2),
    });
    */

    return NextResponse.json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, message: "Failed to process registration" }, { status: 500 });
  }
}
