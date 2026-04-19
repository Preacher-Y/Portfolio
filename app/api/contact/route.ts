import nodemailer from "nodemailer";
import { personalInfo } from "@/data/content";
import { renderContactEmail } from "@/lib/email-templates";

export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function parseContactPayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const { name, email, message } = value as Partial<ContactPayload>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return null;
  }

  return {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };
}

export async function POST(request: Request) {
  try {
    const payload = parseContactPayload(await request.json());

    if (!payload?.name || !payload.email || !payload.message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");
    const smtpFrom = getRequiredEnv("SMTP_FROM");

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${personalInfo.name}" <${smtpFrom}>`,
      to: personalInfo.email,
      replyTo: payload.email,
      subject: `Portfolio Contact: ${payload.name} <${payload.email}>`,
      html: renderContactEmail(payload),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);

    return Response.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
