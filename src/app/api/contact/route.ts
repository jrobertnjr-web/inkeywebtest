import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/ratelimit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(`contact:${ip}`)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  const { name, email, eventDate, eventType, musicNotes, message } = parsed.data;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!process.env.RESEND_API_KEY || !toEmail) {
    console.error("Contact form submitted but RESEND_API_KEY or CONTACT_TO_EMAIL is not configured", {
      name,
      email,
      eventDate,
      eventType,
      musicNotes,
      message,
    });
    return NextResponse.json(
      { error: "Contact form is not fully configured yet. Please email us directly in the meantime." },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "inKey DJ Collective <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        eventType ? `Event type: ${eventType}` : null,
        eventDate ? `Event date: ${eventDate}` : null,
        musicNotes ? `Music notes: ${musicNotes}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ error: "Something went wrong sending your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
